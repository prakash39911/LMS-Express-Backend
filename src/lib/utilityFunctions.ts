export const convertDate = (date: any) => {
  const newDate = new Date(date * 1000); // Convert seconds to milliseconds
  const formattedDate = newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};
