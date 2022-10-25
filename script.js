//adds current date to header
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//create event for save button to add input to local storage 
$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
  
  console.log(calendarItem);
});



$(document).ready(function () {
  if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
    var nineAm = $("<p>" + localStorage["9am"] + "</p>");
    $("#hr9").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
    var nineAm = $("<p>" + localStorage["10am"] + "</p>");
    $("#hr10").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
    var nineAm = $("<p>" + localStorage["11am"] + "</p>");
    $("#hr11").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
    var nineAm = $("<p>" + localStorage["12pm"] + "</p>");
    $("#hr12").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
    var nineAm = $("<p>" + localStorage["1pm"] + "</p>");
    $("#hr1").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
    var nineAm = $("<p>" + localStorage["2pm"] + "</p>");
    $("#hr2").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
    var nineAm = $("<p>" + localStorage["3pm"] + "</p>");
    $("#hr3").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
    var nineAm = $("<p>" + localStorage["4pm"] + "</p>");
    $("#hr4").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
    var nineAm = $("<p>" + localStorage["5pm"] + "</p>");
    $("#hr5").append(nineAm[0].innerText);
  } else {
    ("");
  }
});
  

  //Need to code for past, present, future hour blocks to iclude the set colors in CSS