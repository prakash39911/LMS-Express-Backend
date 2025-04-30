import { CreatedCourseDataType } from "../types";
import { TextToEmbeddings } from "./GeminiApi";
import { pineconeClient } from "./PineconeClient";
import { createPineconeIndexIfNotExist } from "./pineconeIndex";
import prisma from "./prisma";
import {
  calTotalCourseDuration,
  secondsToMinutesOrHour,
} from "./utilityFunctions";

export async function getStructuredCourseDataForID(courseId: string) {
  return prisma.course.findFirst({
    where: {
      id: courseId,
    },
    select: {
      id: true,
      owner: true,
      ownerName: true,
      title: true,
      description: true,
      price: true,
      main_image: true,
      createdAt: true,
      updatedAt: true,
      rating: {
        select: {
          value: true,
        },
      },
      enrolledStudents: {
        select: {
          id: true,
        },
      },
      section: {
        select: {
          id: true,
          sectionName: true,
          courseId: true,
          createdAt: true,
          updatedAt: true,
          videoSection: {
            select: {
              id: true,
              sectionId: true,
              video_title: true,
              video_url: true,
              video_public_id: true,
              video_thumbnailUrl: true,
              video_duration: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      },
    },
  });
}

export const handleCreateEmbeddingsFromCourseDataAndStoreIntoVecorDB = async (
  courseCreated: CreatedCourseDataType
) => {
  const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME;
  const PINECONE_HOST = process.env.PINECONE_HOST;

  if (!PINECONE_INDEX_NAME || !PINECONE_HOST) {
    throw Error("Pinecon Index or Host did not get loaded");
  }

  const totalCourseDuration = secondsToMinutesOrHour(
    calTotalCourseDuration(courseCreated.section)
  );
  const noOfSections = courseCreated.section.length;
  const noOfLectures = courseCreated.section.reduce(
    (accu, curr) => (accu += curr.videoSection.length),
    0
  );
  const rating = courseCreated.rating.length;
  const numberOfStudents = courseCreated.enrolledStudents.length;
  try {
    // Structure the document for the embeddings(vector) conversion so that, its meaning is also stored and semantic search works properly

    const generatedTextForEmbedding = `Course Title : ${courseCreated.title}
                Description : ${courseCreated.description}
                Price : ${courseCreated.price} INR
                Total course duration : ${totalCourseDuration}
                number of sections : ${noOfSections}
                number of lectures : ${noOfLectures}
                rating : ${rating}
                number of students enrolled : ${numberOfStudents}`;

    const preProcessedDoc = {
      text: generatedTextForEmbedding,
      metadata: {
        type: "course_details",
        id: courseCreated.id,
        owner_name: courseCreated.ownerName,
        text: generatedTextForEmbedding,
      },
    };

    const embeddingArray = await TextToEmbeddings(preProcessedDoc);

    await createPineconeIndexIfNotExist(PINECONE_INDEX_NAME);

    // Refer that particular index created in the pinecone database
    const index = pineconeClient.index(PINECONE_INDEX_NAME, PINECONE_HOST);

    const record = [
      {
        id: `vector-${courseCreated.id}`, // Unique ID for this document
        values: embeddingArray,
        metadata: preProcessedDoc.metadata,
      },
    ];

    // Upsert the vector into Pinecone
    await index.namespace("lms-namespace").upsert(record);
  } catch (error) {
    console.log("Error While creating Embeddings", error);
  }
};
