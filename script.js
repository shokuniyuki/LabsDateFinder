const inputDate = document.getElementById("inputDate");
const calculateBtn = document.getElementById("calculateBtn");
const outputDiv = document.getElementById("output");

function getWeekday(date) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[date.getDay()];
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

calculateBtn.addEventListener("click", function() {
  // Get the input date value
  const dateValue = inputDate.value;
  
  // Calculate the first set of dates
  const date1 = new Date(dateValue);
  date1.setDate(date1.getDate() + 45);
  const date1Weekday = getWeekday(date1);
  
  const date2 = new Date(date1);
  date2.setDate(date2.getDate() + 30);
  const date2Weekday = getWeekday(date2);
  
  const date3 = new Date(date2);
  date3.setDate(date3.getDate() + 30);
  const date3Weekday = getWeekday(date3);
  
  // Calculate the second set of dates
  const date4 = new Date(dateValue);
  date4.setDate(date4.getDate() + 21);
  const date4Weekday = getWeekday(date4);
  
  const date5 = new Date(date4);
  date5.setDate(date5.getDate() + 7);
  const date5Weekday = getWeekday(date5);
  
  // Calculate the third set of dates
  const date6 = new Date(date2);
  date6.setDate(date6.getDate() + 21);
  const date6Weekday = getWeekday(date6);
  
  const date7 = new Date
