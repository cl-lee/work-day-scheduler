// --- array for setting and storing the hours on display in the calendar ---
// sets the starting hour, and the number of timeblocks in the calendar
let startingHour = 9;
let timeblocksQuantity = 9;

// hours arrays for displaying the hours in timeblocks
let hours = [];
for (let i = 0; i < timeblocksQuantity; i++) {
    const hour = startingHour + i;
    hourInMoment = moment().set({"h": hour, "m": 0, "s": 0}).format("hA");
    hours.push(hourInMoment);
}

// Display the current day at the top of the calender
let today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM YYYY"));

// Present timeblocks for standard business hours when the user scrolls down.

// codes for a timeblock
for (let j = 0; j < timeblocksQuantity; j++) {

    let $block = $("<div>");
    $block.attr("class", "row");
    $(".container").append($block);

    let $hour = $("<time>");
    $hour.text(hours[j]);
    $hour.attr("class", "hour col-1");
    $hour.attr("data-time", hours[j])
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
}

// stores event and time when clicking on the "save" button
$("button").on("click", function (event) {

    let $eventDescription = $(event.target).parentsUntil(".container").children("textarea").val();
    let $eventTime = $(event.target).parentsUntil(".container").children(".hour").attr("data-time");

    localStorage.setItem($eventTime, $eventDescription);
})

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// if (today.isSame(hours[0], "hour")) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// if (today.isAfter(hours[0], "hour")) {
//     $eventDescriptionEL.addClass("past");
// } else if (today.isSame(hours[0], "hour")) {
//     $eventDescriptionEL.addClass("present");
// } else {
//     $eventDescriptionEL.addClass("future");
// }



// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page

