import { section } from "../types";

export const convertDate = (date: any) => {
  const newDate = new Date(date * 1000); // Convert seconds to milliseconds
  const formattedDate = newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};

export function calTotalCourseDuration(section: section) {
  const noOfSections = section.length;
  let noOfVideoSections = 0;
  let totalDuration = 0;

  for (let i = 0; i < noOfSections; i++) {
    noOfVideoSections += section[i].videoSection.length;
    for (let j = 0; j < section[i].videoSection.length; j++) {
      totalDuration += section[i].videoSection[j].video_duration;
    }
  }
  return totalDuration;
}
