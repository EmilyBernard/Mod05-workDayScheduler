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

//Need to test code below, make sure user input saving when refreshed

$(document).ready(function () {
  if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
    var nineAm = $("<p>" + localStorage["9am"] + "</p>");
    $("#hr9").append(nineAm[0].innerText);
  } else {
    ("");
  }
});
  

  //Need to code for past, present, future hour blocks to iclude the set colors in CSS