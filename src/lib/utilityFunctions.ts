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

export function secondsToMinutesOrHour(totalSeconds: number) {
  const roundOffSeconds = Math.floor(totalSeconds);
  const minutes = Math.floor(roundOffSeconds / 60);

  if (minutes >= 60) {
    const hour = Math.floor(minutes / 60);
    const hourMinute = minutes % 60;
    return `${hour}:${hourMinute.toString().padStart(2, "0")} hour`;
  } else if (roundOffSeconds < 60) {
    return `${roundOffSeconds} seconds`;
  } else {
    const seconds = roundOffSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")} minutes`;
  }
}
