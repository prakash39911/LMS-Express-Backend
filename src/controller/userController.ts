import { Request, Response } from "express";
import { getAuth, clerkClient } from "@clerk/express";
import { onBoardingFormSchema } from "@prakash39911/sharedlms";
import prisma from "../lib/prisma";
import { handleGeneratePdf } from "../lib/pdf";
import { calTotalCourseDuration, convertDate } from "../lib/utilityFunctions";

export const addRoleHandler = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    throw new Error("No Logged in user");
  }

  try {
    const data = req.body;

    const validated = onBoardingFormSchema.safeParse(data);

    if (!validated.success) throw new Error("Validation Failed");

    const { firstname, lastname, role } = validated.data;

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        onboardingComplete: true,
        firstName: firstname,
        lastName: lastname,
        role,
      },
    });
    res.status(200).json({ success: true });
  } catch (error) {
    throw new Error("Error while updating the User metaData");
  }
};

export async function handleGetPurchaseDetails(req: Request, res: Response) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not logged in" });
      return;
    }

    const billingInfo = await prisma.enrolledStudents.findMany({
      where: {
        studentId: userId,
      },
      select: {
        id: true,
        amount: true,
        created_at: true,
        course: {
          select: {
            title: true,
          },
        },
      },
    });

    const convertedToArray = billingInfo.map((eachObj) => ({
      id: eachObj.id,
      amount: eachObj.amount / 100,
      courseName: eachObj.course.title,
      purchaseDate: convertDate(eachObj.created_at),
    }));

    res.status(200).json({
      status: true,
      message: "Data fetched successfully",
      data: convertedToArray,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Server Error" });
  }
}

export const handleGenerateDownloadPdf = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const invoice_data = await prisma.enrolledStudents.findUnique({
      where: {
        id: id,
      },
      select: {
        invoice_name: true,
        created_at: true,
        email: true,
        contact: true,
        amount: true,
        course: {
          select: {
            title: true,
          },
        },
      },
    });

    if (!invoice_data) {
      res.status(400).json({ status: false, message: "No invoice found" });
      return;
    }

    const structuredInvoiceData = {
      invoice_name: invoice_data?.invoice_name,
      created_at: invoice_data?.created_at,
      email: invoice_data?.email,
      contact: invoice_data?.contact,
      courseName: invoice_data?.course.title,
      amount: invoice_data?.amount / 100,
    };

    const pdfBuffer = await handleGeneratePdf(structuredInvoiceData);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=invoice.pdf");
    res.send(Buffer.from(pdfBuffer));
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export async function handleGetDashboardDetails(req: Request, res: Response) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not logged in" });
      return;
    }

    const details = await prisma.course.findMany({
      where: {
        owner: userId,
      },
      select: {
        id: true,
        title: true,
        enrolledStudents: {
          select: {
            amount: true,
            created_at: true,
            courseId: true,
          },
        },
      },
    });

    res.status(200).json({
      status: true,
      message: "Data received successfully",
      data: details,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
}

export const handleCourseProgressUpdate = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId } = getAuth(req);
    const { videoId, timeInSeconds, courseId } = req.body;

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not logged in" });
      return;
    }

    if (!videoId) {
      res.status(400).json({ status: false, message: "Insufficient Details" });
      return;
    }

    const videoDetails = await prisma.videoProgress.findFirst({
      where: {
        userId: userId,
        videoSectionId: videoId,
      },
    });

    if (!videoDetails) {
      res
        .status(400)
        .json({ status: false, message: "Particular video not found" });
      return;
    }

    if (
      videoDetails.watchedSeconds >= timeInSeconds &&
      timeInSeconds <= videoDetails.video_duration
    ) {
      res
        .status(200)
        .json({ status: false, message: "No Need to update watched Seconds" });
      return;
    }

    const currentVideoLength = videoDetails.video_duration;
    const videoPlayedForSeconds = timeInSeconds;

    const isVideoProgressUpdated = await prisma.videoProgress.update({
      where: {
        id: videoDetails.id,
      },
      data: {
        watchedSeconds: videoPlayedForSeconds,
        completionPercentage: Math.floor(
          (videoPlayedForSeconds / currentVideoLength) * 100
        ),
        isCompleted:
          videoPlayedForSeconds / currentVideoLength > 0.85 ? true : false,
      },
    });

    const courseDetails = await prisma.course.findFirst({
      where: {
        id: courseId,
      },
      select: {
        section: {
          select: {
            id: true,
            videoSection: {
              select: {
                id: true,
                video_duration: true,
              },
            },
          },
        },
      },
    });

    if (!courseDetails) {
      console.error("Course details absent");
      return;
    }

    const courseProgressDetails = await prisma.courseProgress.findFirst({
      where: {
        courseId: courseId,
        studentId: userId,
      },
      select: {
        id: true,
        sectionProgress: {
          select: {
            id: true,
            videoProgress: {
              select: {
                watchedSeconds: true,
              },
            },
          },
        },
      },
    });

    if (!courseProgressDetails) {
      res.status(400).json({
        status: false,
        message: "Course progress details not present",
      });
      return;
    }

    const totalWatchedSecondsArray = courseProgressDetails?.sectionProgress.map(
      (eachSection) => {
        return eachSection.videoProgress.reduce(
          (accumulator, currentValue) =>
            (accumulator += currentValue.watchedSeconds),
          0
        );
      }
    );

    const totalWatchedSeconds = totalWatchedSecondsArray.reduce(
      (accu, curr) => (accu += curr)
    );

    const totalCourseDuration = calTotalCourseDuration(courseDetails?.section);

    const isCourseProgressCreated = await prisma.courseProgress.update({
      where: {
        id: courseProgressDetails?.id,
      },
      data: {
        completionPercentage: Math.floor(
          (totalWatchedSeconds / totalCourseDuration) * 100
        ),
        isCompleted:
          totalWatchedSeconds / totalCourseDuration > 0.9 ? true : false,
      },
    });

    res
      .status(200)
      .json({ status: true, message: "Progress Updated Successfully" });
  } catch (error) {
    console.error("Error while updating course progress", error);
    res.status(500).json({ status: false, message: "Something went wrong" });
  }
};

export const handleGetCourseProgressStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not logged In" });
      return;
    }

    const isEnrolled = await prisma.enrolledStudents.findMany({
      where: {
        studentId: userId,
      },
      select: {
        courseProgress: {
          select: {
            courseId: true,
            completionPercentage: true,
            isCompleted: true,
            sectionProgress: {
              select: {
                sectionId: true,
                videoProgress: {
                  select: {
                    videoSectionId: true,
                    completionPercentage: true,
                    isCompleted: true,
                    watchedSeconds: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    res.status(200).json({
      status: true,
      message: "Data Retrieved Successfully",
      data: isEnrolled,
    });
  } catch (error) {
    console.error("Error While Course Progress Data", error);
    res.status(500).json({ status: false, message: "Something went wrong" });
  }
};
