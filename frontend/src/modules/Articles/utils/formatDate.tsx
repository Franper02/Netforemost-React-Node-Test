const formatDate = (timestamp: string): string => {
  let date = new Date(timestamp);

  // Extract day, month, and year
  let day: number | string = date.getDate();
  let month: number | string = date.getMonth() + 1; // Month is zero-indexed
  let year: number = date.getFullYear();

  // Ensure two-digit format for day and month
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  // Return formatted date
  return `${day}/${month}/${year}`;
};

export default formatDate;
