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

    const data = req.body;

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
  try {
    const courses = await prisma.course.findMany({
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
                video_thumbnailUrl: true,
                video_title: true,
                video_url: true,
                video_duration: true,
              },
            },
          },
        },
      },
    });

    res
      .status(200)
      .json({ message: "Course retrieved successfully", data: course });
  } catch (error) {
    console.error(error);
  }
}
