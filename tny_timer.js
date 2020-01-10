"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: 
   Date:   

*/
showClock();
setInterval("showClock()", 1000);
// showClock() will run every second

function showClock(){
   var thisDay = new Date();
   // var thisDay will be today's date
   var localDate = thisDay.toLocaleDateString();
   // changes it to match the local format for date
   var localTime = thisDay.toLocaleTimeString();
   // changes it to match the local format for time

   document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";
   // changes the current time in the HTML to be the localDate and localTime variables

   var j4Date = nextJuly4(thisDay);
   // j4Date will be what the nextJuly4 returns using the thisDay var
   // as a parameter
   j4Date.setHours("21");

   var days = (j4Date - thisDay)/(1000*60*60*24);
   // changes it from miliseconds to days
   var hrs = (days - Math.floor(days))*24;
   // changes it from days to hours
   var mins = (hrs - Math.floor(hrs))*60;
   // changes it from hours to mins
   var secs = (mins - Math.floor(mins))*60;
   // changes it from mins to secs
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.ceil(secs);
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}