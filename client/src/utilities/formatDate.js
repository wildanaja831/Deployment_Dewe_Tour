export default function formatDate(date) {
  const [year, month, day] = date.split("-");
  console.log(day, month, year);
  console.log(date);
  const newDate = new Date(year, month - 1, day);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[newDate.getDay()];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month - 1];

  return [day, monthName, year];
}
