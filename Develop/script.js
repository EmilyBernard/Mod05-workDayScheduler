//adds current date to header
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//create event for save button to add input to local storage and retrieve when refreshed
$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
  
  console.log(calendarItem);
});

/*
$(document).ready(function () {
  if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
    var nineAm = $("<p>" + localStorage["9am"] + "</p>");
    $("#nineAm").append(nineAm[0].innerText);
  } else {
    ("");
  })
  */