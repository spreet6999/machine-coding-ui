export function getFullDate(date = "") {
  const dateObj = new Date(date);
  const dayDate = dateObj.getDate();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDay();

  let months = [
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
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[day]} ${dayDate}-${months[month]}-${year}`;
}
