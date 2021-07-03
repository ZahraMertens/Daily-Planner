

var timeDisplayEl = $("#time-display");



var today = moment();
today = today.startOf("Hour").hour(8);
console.log(today);

//8am
var time1 = today.add(0, "H");
time1 = time1.format("HH:mm a");
console.log(time1)
var timeContainer1 = $(".time-1").text(time1);

//9am
var time2 = today.add(1, "H");
time2 = time2.format("HH:mm a");
var timeContainer2 = $(".time-2").text(time2);

//10am
var time3 = today.add(1, "H");
time3 = time3.format("HH:mm a");
var timeContainer3 = $(".time-3").text(time3);

//11am 
var time4 = today.add(1, "H");
time4 = time4.format("HH:mm a");
var timeContainer4 = $(".time-4").text(time4);

//12pm
var time5 = today.add(1, "H");
time5 = time5.format("HH:mm a");
var timeContainer5 = $(".time-5").text(time5);

//1pm
var time6 = today.add(1, "H");
time6 = time6.format("HH:mm a");
var timeContainer6 = $(".time-6").text(time6); 

//2pm
var time7 = today.add(1, "H");
time7 = time7.format("HH:mm a");
var timeContainer7 = $(".time-7").text(time7);

//3pm
var time8 = today.add(1, "H");
time8 = time8.format("HH:mm a");
var timeContainer8 = $(".time-8").text(time8);

//4pm
var time9 = today.add(1, "H");
time9 = time9.format("HH:mm a");
var timeContainer9 = $(".time-9").text(time9);

//Set timer in header and add interval that it is updated every second
$(document).ready(function() {
    setInterval(function(){
        var newTime = moment().format("MMM DD, YYYY [at] HH:mm:ss a");
        timeDisplayEl.text(newTime);
    }, 1000);
});

//Checking time to add classes for colours
function checkTime () {

    var currentTime = moment();
    currentTime = currentTime.startOf("hour");
    currentTime = currentTime.format("HH");

    time1 = moment().startOf("hour").hour(8);
    time1 = time1.format("HH");

    console.log(time1)
    console.log(currentTime)

   //8am
    if (time1 === currentTime){
        $("#input-text1").addClass("present"); //check before and after function
    } else if (time1 > currentTime) {
        $("#input-text1").addClass("future");
    } else if (time1 <currentTime) {
        $("#input-text1").addClass("past");
    };

    time2 = moment().startOf("hour").hour(9);
    time2 = time2.format("HH");
    //9am
    if (time2 === currentTime){
        $("#input-text2").addClass("present");
    } else if (time2 > currentTime) {
        $("#input-text2").addClass("future");
    } else if (time2 < currentTime) {
        $("#input-text2").addClass("past");
    };

    time3 = moment().startOf("hour").hour(10);
    time3 = time3.format("HH");
    //10am
    if (time3 === currentTime){
        $("#input-text3").addClass("present");
    } else if (time3 > currentTime) {
        $("#input-text3").addClass("future");
    } else if (time3 < currentTime) {
        $("#input-text3").addClass("past");
    };   

    time4 = moment().startOf("hour").hour(11);
    time4 = time4.format("HH");
    //11am
    if (time4 === currentTime){
        $("#input-text4").addClass("present");
    } else if (time4 > currentTime) {
        $("#input-text4").addClass("future");
    } else if (time4 < currentTime) {
        $("#input-text4").addClass("past");
    };

    //12pm
    time5 = moment().startOf("hour").hour(12);
    time5 = time5.format("HH");
    if (time5 === currentTime){
        $("#input-text5").addClass("present");
    } else if (time5 > currentTime) {
        $("#input-text5").addClass("future"); 
    } else if (time5 < currentTime) {
        $("#input-text5").addClass("past");
    };

    //1pm
    time6 = moment().startOf("hour").hour(13);
    time6 = time6.format("HH");
    if (time6 === currentTime){
        $("#input-text6").addClass("present");
    } else if (time6 > currentTime) {
        $("#input-text6").addClass("future");
    } else if (time6 < currentTime) {
        $("#input-text6").addClass("past");
    };

    //2pm
    time7 = moment().startOf("hour").hour(14);
    time7 = time7.format("HH");
    if (time7 === currentTime){
        $("#input-text7").addClass("present");
    } else if (time7 > currentTime) {
        $("#input-text7").addClass("future");
    } else if (time7 < currentTime) {
        $("#input-text7").addClass("past");
    };

    //3pm
    time8 = moment().startOf("hour").hour(15);
    time8 = time8.format("HH");
    if (time8 === currentTime){
        $("#input-text8").addClass("present");
    } else if (time8 > currentTime) {
        $("#input-text8").addClass("future");
    } else if (time8 < currentTime) {
        $("#input-text8").addClass("past");
    };

    //4pm
    time9 = moment().startOf("hour").hour(16);
    time9 = time9.format("HH");
    if (time9 === currentTime){
        $("#input-text9").addClass("present");
    } else if (time9 > currentTime) {
        $("#input-text9").addClass("future");
    } else if (time9 < currentTime) {
        $("#input-text9").addClass("past");
    };
}

checkTime();

$(".saveBtn").on("click", function() {
    
    var input = $(this).siblings("textarea").val();
    var hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
});

  $("#input-text1").val(localStorage.getItem("hour8"));
  $("#input-text2").val(localStorage.getItem("hour9"));
  $("#input-text3").val(localStorage.getItem("hour10"));
  $("#input-text4").val(localStorage.getItem("hour11"));
  $("#input-text5").val(localStorage.getItem("hour12"));
  $("#input-text6").val(localStorage.getItem("hour13"));
  $("#input-text7").val(localStorage.getItem("hour14"));
  $("#input-text8").val(localStorage.getItem("hour15"));
  $("#input-text9").val(localStorage.getItem("hour16"));
 