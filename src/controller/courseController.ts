import { Request, Response } from "express";
import { createCourseFormSchema } from "@prakash39911/sharedlms";
import prisma from "../lib/prisma";
import { getAuth } from "@clerk/express";

export const createCourseHandler = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      throw new Error("User is not Authorized");
    }

    // const user = await clerkClient.users.getUser(userId);
    // console.log("Logged in User Info", user);

    const { ownerName, ...data } = req.body;

    console.log("owner name", ownerName);
    console.log("remaining data", data);

    const validated = createCourseFormSchema.safeParse(data);

    if (!validated.success) {
      throw new Error("Validation failed on the backend");
    }

    const { title, description, price, section, main_image } = validated.data;

    const isCourseCreated = await prisma.course.create({
      data: {
        owner: userId,
        title,
        description,
        price,
        main_image,
        ownerName: ownerName,
        section: {
          create: section.map((eachSection) => ({
            sectionName: eachSection.sectionName,
            videoSection: {
              create: eachSection.videoSection.map((eachVideoSection) => ({
                video_title: eachVideoSection.video_title,
                video_url: eachVideoSection.video_url,
                video_public_id: eachVideoSection.video_public_id,
                video_thumbnailUrl: eachVideoSection.video_thumbnailUrl,
                video_duration: eachVideoSection.video_duration,
              })),
            },
          })),
        },
      },
      include: {
        section: {
          include: {
            videoSection: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "Course Created Successfully",
      course: isCourseCreated,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllCourse = async (req: Request, res: Response) => {
  const { ratings, priceRange } = req.query;
  const ratingsString = typeof ratings === "string" ? ratings : "";
  const ratingArray = ratingsString ? ratingsString.split(",").map(Number) : [];

  const pricesString = typeof priceRange === "string" ? priceRange : "";
  const [minPrice, maxPrice] = pricesString.split(",");

  try {
    const whereConditions: any[] = [];

    if (minPrice) {
      whereConditions.push({ price: { gte: parseInt(minPrice) } });
    }
    if (maxPrice) {
      whereConditions.push({ price: { lte: parseInt(maxPrice) } });
    }
    if (ratingArray.length > 0) {
      whereConditions.push({
        rating: {
          some: {
            value: { in: ratingArray },
          },
        },
      });
    }

    const courses = await prisma.course.findMany({
      where: {
        AND: whereConditions,
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        main_image: true,
        rating: {
          select: {
            value: true,
          },
        },
        section: {
          select: {
            sectionName: true,
            videoSection: {
              select: {
                video_public_id: true,
                video_title: true,
                video_url: true,
                video_thumbnailUrl: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json({ message: "All courses retrieved", data: courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export async function getCourseForId(req: Request, res: Response) {
  try {
    const { courseId } = req.params;

    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        main_image: true,
        enrolledStudents: true,
        updatedAt: true,
        rating: {
          select: {
            id: true,
            value: true,
            userId: true,
          },
        },
        section: {
          select: {
            id: true,
            sectionName: true,
            videoSection: {
              select: {
                id: true,
                video_public_id: true,
                video_title: true,
                video_duration: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json({
      status: true,
      message: "Course retrieved successfully",
      data: course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Failed to Load data" });
  }
}

export async function playCourseForId(req: Request, res: Response) {
  try {
    const { courseId } = req.params;
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not Logged In" });
      return;
    }

    const isUserEnrolled = await prisma.enrolledStudents.findFirst({
      where: {
        studentId: userId,
        courseId: courseId,
        payment_status: "CAPTURE",
      },
    });

    if (!isUserEnrolled) {
      res
        .status(400)
        .json({ status: false, message: "Please Buy this course to continue" });
      return;
    }

    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        main_image: true,
        enrolledStudents: true,
        updatedAt: true,
        rating: {
          select: {
            id: true,
            value: true,
            userId: true,
          },
        },
        section: {
          select: {
            id: true,
            sectionName: true,
            videoSection: {
              select: {
                id: true,
                video_public_id: true,
                video_title: true,
                video_duration: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json({
      status: true,
      message: "Course retrieved successfully",
      data: course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Failed to Load data" });
  }
}

export const getParticularVideoUrl = async (req: Request, res: Response) => {
  try {
    const { videoSectionId } = req.params;

    if (!videoSectionId) throw new Error("Id not found");

    const videoUrl = await prisma.videoSection.findUnique({
      where: {
        id: videoSectionId,
      },
      select: {
        id: true,
        video_public_id: true,
      },
    });

    if (!videoUrl) throw new Error("Video not found");

    res.status(200).json({ status: "success", data: videoUrl });
  } catch (error) {
    console.log(error);
  }
};

export const getCoursesforTeacher = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) throw new Error("You are not authorized");

    const courses = await prisma.course.findMany({
      where: {
        owner: userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        main_image: true,
        rating: {
          select: {
            value: true,
          },
        },
        section: {
          select: {
            sectionName: true,
            videoSection: {
              select: {
                video_public_id: true,
                video_title: true,
                video_url: true,
                video_thumbnailUrl: true,
              },
            },
          },
        },
        enrolledStudents: {
          select: {
            id: true,
          },
        },
      },
    });

    res.status(200).json({ status: true, data: courses });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error loading Data" });
  }
};

export const getCoursesforStudent = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not Logged In" });
      return;
    }

    const courseIds = await prisma.enrolledStudents.findMany({
      where: {
        studentId: userId,
      },
    });

    if (courseIds?.length === 0) {
      res.status(400).json({
        status: false,
        message: "You Have not Bought any courses yet",
      });
      return;
    }

    const courseIdArray = courseIds.map((eachObj) => eachObj.courseId);

    const courses = await prisma.course.findMany({
      where: {
        id: { in: courseIdArray },
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        main_image: true,
        rating: {
          select: {
            value: true,
          },
        },
        section: {
          select: {
            sectionName: true,
            videoSection: {
              select: {
                video_public_id: true,
                video_title: true,
                video_url: true,
                video_thumbnailUrl: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json({ status: true, data: courses });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error loading Data" });
  }
};

export const isLoggedInTeacherOwner = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not Logged In" });
      return;
    }

    const isOwner = await prisma.course.findFirst({
      where: { owner: userId, id: courseId },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        main_image: true,
        enrolledStudents: true,
        updatedAt: true,
        rating: {
          select: {
            id: true,
            value: true,
            userId: true,
          },
        },
        section: {
          select: {
            id: true,
            sectionName: true,
            videoSection: {
              select: {
                id: true,
                video_public_id: true,
                video_title: true,
                video_duration: true,
              },
            },
          },
        },
      },
    });

    if (!isOwner) {
      res
        .status(400)
        .json({ status: false, message: "You are not authorized" });
      return;
    }

    res.status(200).json({ status: true, data: isOwner });
  } catch (error) {
    res.status(500).json({ status: false, message: "Unable to fetch" });
  }
};

export const isAlreadyPurchased = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not logged in" });
      return;
    }

    const hasPurchasedThisCourse = await prisma.enrolledStudents.findFirst({
      where: {
        courseId: courseId,
        studentId: userId,
      },
    });

    if (!hasPurchasedThisCourse) {
      res.json({
        status: false,
        message: "You have not purchased this course",
      });
      return;
    }

    res
      .status(200)
      .json({ status: true, message: "You have bought this course already" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Failed to Fetch Data, Internal Server Error",
    });
  }
};

export const addRating = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    const { courseId } = req.params;

    const { value } = req.body;

    console.log("Request is receiving", userId, courseId, value);

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not LoggedIn" });
      return;
    }

    const result = await prisma.rating.create({
      data: {
        userId,
        courseId,
        value: value,
      },
    });

    res
      .status(200)
      .json({ status: true, message: "Feedback submitted Successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
