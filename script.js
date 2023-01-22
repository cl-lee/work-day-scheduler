// --- array for setting and storing the hours on display in the calendar ---
// sets the starting hour, and the number of timeblocks in the calendar
let hours = [9];
let timeblocksQuantity = 9;

// stores timeblock hours in the hours array
for (let i = 1; i < timeblocksQuantity; i++) {
    const hour = hours[0] + i;
    hours.push(hour);
}

// Display the current day at the top of the calender
let today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM YYYY"));

// Present timeblocks for standard business hours when the user scrolls down.

// codes for a timeblock

let $block = $("<div>");
$block.attr("class", "row");
$(".container").append($block);

let $hour = $("<time>");
$hour.text(hours[0].format("Ha"));
$hour.attr("class", "hour col-1");
$hour.attr("data-time", hours[0].format("hA"))
$block.append($hour);

let $eventDescriptionEL = $("<textarea>");
$eventDescriptionEL.attr("class", "description col-10");
$eventDescriptionEL.text(localStorage.getItem($hour.attr("data-time")));
$block.append($eventDescriptionEL);

let $saveButton = $("<button>");
let $buttonIcon = $("<i>");
$buttonIcon.attr("class", "fas fa-save saveAction");
$saveButton.append($buttonIcon);
$saveButton.attr("class", "saveBtn col-1 saveAction");
$block.append($saveButton);

// stores event and time when clicking on the "save" button
$("button").on("click", function (event) {

    let $eventDescription = $(event.target).parentsUntil(".container").children("textarea").val();
    let $eventTime = $(event.target).parentsUntil(".container").children(".hour").attr("data-time");

    localStorage.setItem($eventTime, $eventDescription);
})

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
if (today.isSame(hours[0], "hour")) {
    console.log("true");
} else {
    console.log("false");
}

if (today.isAfter(hours[0], "hour")) {
    $eventDescriptionEL.addClass("past");
} else if (today.isSame(hours[0], "hour")) {
    $eventDescriptionEL.addClass("present");
} else {
    $eventDescriptionEL.addClass("future");
}



// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page

