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
