// Display the current day at the top of the calender
let today = moment()
$("#currentDay").text(today.format("dddd, Do MMMM YYYY"))

// Present timeblocks for standard business hours when the user scrolls down.

// codes for a timeblock
let $firstHour = moment().hour(9).minute(0).second(0);

let $block = $("<div>");
$block.attr("class", "row");
$(".container").append($block);

let $hour = $("<time>");
$hour.text($firstHour.format("Ha"));
$hour.attr("class", "hour col-1");
$hour.attr("data-time", $firstHour.format("hA"))
$block.append($hour);

let $eventDescriptionEL = $("<textarea>");
$eventDescriptionEL.text("testing");
$eventDescriptionEL.attr("class", "description col-10");
$block.append($eventDescriptionEL);

let $saveButton = $("<button>");
let $buttonIcon = $("<i>");
$buttonIcon.attr("class", "fas fa-save saveAction");
$saveButton.append($buttonIcon);
$saveButton.attr("class", "saveBtn col-1 saveAction");
$block.append($saveButton);

// stores event and time when clicking on the "save" button
$("button").on("click", function(event) {

    let $eventDescription = $(event.target).parentsUntil(".container").children("textarea").val();
    let $eventTime = $(event.target).parentsUntil(".container").children(".hour").attr("data-time");
    
    localStorage.setItem($eventTime,$eventDescription);
    console.log(localStorage.getItem($eventTime));
})

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
if (today.isAfter($firstHour, "hour")) {
    $eventDescriptionEL.addClass("past");
}



// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page

