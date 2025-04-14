import { Request, Response } from "express";
import { createCourseFormSchema } from "@prakash39911/sharedlms";
import prisma from "../lib/prisma";
import { getAuth } from "@clerk/express";
import { elasticClient } from "../lib/elasticClient";
import { searchFunctionReturnType } from "../types";

export const createCourseHandler = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      throw new Error("User is not Authorized");
    }

    const { ownerName, ...data } = req.body;

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

    if (isCourseCreated) {
      const indexName = process.env.ELASTIC_PRODUCTION_INDEX;

      if (!indexName) {
        throw new Error("Index name is not present");
      }

      try {
        await elasticClient.index({
          index: indexName,
          document: {
            id: isCourseCreated.id,
            title: isCourseCreated.title,
            description: isCourseCreated.description,
            createatedAt: new Date(isCourseCreated.createdAt)
              .toISOString()
              .split("T")[0],
          },
        });
        console.log("Date Ingested Successfully to Elastic");
      } catch (error) {
        console.error("Error while ingesting data to Elastic", error);
      }
    }

    res.status(200).json({
      message: "Course Created Successfully",
      course: isCourseCreated,
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleCreateCourseProgress = async (
  req: Request,
  res: Response
) => {
  const { courseId } = req.params;
  const { userId } = getAuth(req);

  if (!courseId || !userId) {
    res
      .status(400)
      .json({ status: false, message: "Required details unavailable" });
    return;
  }

  const courseDetails = await prisma.course.findFirst({
    where: {
      id: courseId,
    },
    select: {
      id: true,
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
    res
      .status(400)
      .json({ status: false, message: "Course details are not present" });
    return;
  }

  const enrollmentId = await prisma.enrolledStudents.findFirst({
    where: {
      studentId: userId,
      courseId: courseId,
      payment_status: "CAPTURED",
    },
    select: {
      id: true,
    },
  });

  if (!enrollmentId) {
    res.status(400).json({
      status: false,
      message: "Student is not enrolled into the course",
    });
    return;
  }

  const isCourseProgressCreated = await prisma.courseProgress.create({
    data: {
      enrolledStudentId: enrollmentId.id,
      courseId: courseId,
      studentId: userId,
      sectionProgress: {
        create: courseDetails.section.map((eachSection) => ({
          sectionId: eachSection.id,
          videoProgress: {
            create: eachSection.videoSection.map((eachVideoSection) => ({
              videoSectionId: eachVideoSection.id,
              video_duration: eachVideoSection.video_duration,
              userId: userId,
            })),
          },
        })),
      },
    },
    include: {
      sectionProgress: {
        include: {
          videoProgress: true,
        },
      },
    },
  });

  res
    .status(200)
    .json({ status: true, message: "Course progress is created successfully" });
};

const courseSelectObject = {
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
};

// Helper function for getAllCourse
const searchFunction = async (
  searchString: string
): Promise<searchFunctionReturnType[]> => {
  if (!searchString || !searchString.trim()) {
    return [];
  }

  const indexName = process.env.ELASTIC_PRODUCTION_INDEX;

  if (!indexName) {
    console.error("Elasticsearch index not configured");
    return [];
  }

  try {
    const response = await elasticClient.search({
      index: indexName,
      query: {
        match: {
          title: searchString.trim(),
        },
      },
      sort: [{ createdAt: { order: "desc" } }],
      // Add timeout to prevent long-running queries
      timeout: "5s",
    });

    console.log("Elastic search response", response.hits.hits);

    return response.hits.hits.map(
      (eachObj) => eachObj._source as searchFunctionReturnType
    );
  } catch (error) {
    console.error("Elasticsearch search error:", error);
    return [];
  }
};

// Helper function for getAllCourse
const filterFunction = async (pricesString: any, ratingArray: any) => {
  const pricesArray = pricesString.split(",");
  const [minPrice, maxPrice] = pricesArray;

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

  try {
    const courses = await prisma.course.findMany({
      where: {
        AND: whereConditions,
      },
      select: courseSelectObject,
    });

    return courses;
  } catch (error) {
    console.error("Error while applying filter", error);
    throw new Error("Failed to filter courses");
  }
};

// Helper function for getAllCourse
const getCourseForParticularId = async (courseId: string) => {
  try {
    const course = await prisma.course.findFirst({
      where: { id: courseId },
      select: courseSelectObject,
    });

    if (!course) {
      throw new Error(`Course not found with ID: ${courseId}`);
    }

    return course;
  } catch (error) {
    console.error(`Error retrieving course with ID ${courseId}:`, error);
    throw error;
  }
};

export const getAllCourse = async (req: Request, res: Response) => {
  try {
    const { ratings, priceRange, search } = req.query;

    const ratingsString = typeof ratings === "string" ? ratings : "";
    const ratingArray = ratingsString
      ? ratingsString.split(",").map(Number)
      : [];

    const pricesString = typeof priceRange === "string" ? priceRange : "";

    const searchString = typeof search === "string" ? search.trim() : "";

    let results: any[];

    // Filter and search query, both does not exist
    if (!searchString && ratingArray.length === 0 && !pricesString) {
      results = await filterFunction("", []);
    }

    // Only Search Query Exists
    else if (searchString && ratingArray.length === 0 && !pricesString) {
      const elasticResults = await searchFunction(searchString);
      console.log(
        `Elastic search results count for "${searchString}":`,
        elasticResults.length
      );

      if (elasticResults.length === 0) {
        results = [];
      } else {
        results = await Promise.all(
          elasticResults.map((item) =>
            getCourseForParticularId(item.id).catch(() => null)
          )
        );
        // Filter out any null results from failed queries
        results = results.filter(Boolean);
      }
    }

    // If search query is empty and other filters exits
    else if (!searchString && (ratingArray.length > 0 || pricesString)) {
      results = await filterFunction(pricesString, ratingArray);
    } else {
      // All filter and search query exist, intersection result will be returned
      const searchResults = await searchFunction(searchString);

      if (searchResults.length === 0) {
        results = [];
      } else {
        // Get filtered courses
        const filteredCourses = await filterFunction(pricesString, ratingArray);

        // Find intersection based on course IDs
        const searchResultIds = new Set(
          searchResults.map((result) => result.id)
        );
        results = filteredCourses.filter((course) =>
          searchResultIds.has(course.id)
        );
      }
    }

    res.status(200).json({
      status: true,
      data: results,
    });
  } catch (error) {
    console.error("Error in getAllCourse", error);
    res.status(500).json({
      status: false,
      message: "An error occured while fetching course",
    });
  }
};

export async function getCourseForId(req: Request, res: Response) {
  try {
    const { courseId } = req.params;

    if (!courseId) {
      throw new Error("Course ID is required");
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
        payment_status: "CAPTURED",
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
        enrolledStudents: {
          select: {
            id: true,
            studentId: true,
            courseProgress: {
              select: {
                completionPercentage: true,
                isCompleted: true,
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
