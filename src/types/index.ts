export type ResultReturnType = {
  status: string;
  message: string;
  data?: any;
};

export type searchFunctionReturnType = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

export type eachCourseType = {
  id: string;
  title: string;
  description: string;
  price: number;
  main_image: string;
  rating: { value: number }[];
  section: {
    sectionName: string;
    videoSection: {
      video_title: string;
      video_url: string;
      video_public_id: string;
      video_thumbnailUrl: string;
    }[];
  }[];
  enrolledStudents: { id: string }[];
};

export type section = {
  id: string;
  videoSection: {
    id: string;
    video_duration: number;
  }[];
}[];

export type CreatedCourseDataType = {
  id: string;
  owner: string;
  ownerName: string;
  title: string;
  description: string;
  price: number;
  main_image: string;
  createdAt: Date;
  updatedAt: Date;
  rating: {
    value: number;
  }[];
  enrolledStudents: {
    id: string;
  }[];
  section: {
    id: string;
    sectionName: string;
    courseId: string;
    createdAt: Date;
    updatedAt: Date;
    videoSection: {
      id: string;
      video_title: string;
      video_url: string;
      video_public_id: string;
      video_thumbnailUrl: string;
      video_duration: number;
      sectionId: string;
      createdAt: Date;
      updatedAt: Date;
    }[];
  }[];
};

export type SummaryDataType = {
  video_title: string;
  transcription_summary: string | null;
  section: {
    sectionName: string;
    course: {
      title: string;
    };
  };
};

export type ChatMessage = {
  id: string;
  text: string;
  sender: "user" | "system";
  timestamp: Date;
};
