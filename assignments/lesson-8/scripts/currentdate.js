var today = new Date();

var fullYear = today.getFullYear();


var monthNames= new Array(12);
monthNames[0] = "January";
monthNames[1] = "February";
monthNames[2] = "March";
monthNames[3] = "April";
monthNames[4] = "May";
monthNames[5] = "June";
monthNames[6] = "July";
monthNames[7] = "August";
monthNames[8] = "September";
monthNames[9] = "October";
monthNames[10] = "November";
monthNames[11] = "December";

var month = monthNames[today.getMonth()];


var dayNames = new Array(7);
dayNames[0] = "Sunday";
dayNames[1] = "Monday";
dayNames[2] = "Tuesday";
dayNames[3] = "Wednesday";
dayNames[4] = "Thursday";
dayNames[5] = "Friday";
dayNames[6] = "Saturday";

var dayOfWeek = dayNames[today.getDay()];

var fullDate = dayOfWeek + ', ' + today.getDate() + ' ' + month + ', ' + fullYear;

document.getElementById("currentDate").innerHTML = fullDate;

document.getElementById("copyright-year").innerHTML = fullYear;