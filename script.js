// Display the current day at the top of the calender
let today = moment()
$("#currentDay").text(today.format("dddd, Do MMMM YYYY"))

// Present timeblocks for standard business hours when the user scrolls down.
let $firstHour = moment().hour(9).minute(0).second(0);
console.log($firstHour.format("hA"));

let $block = $("<div>");
$block.attr("class", "row");
$(".container").append($block);

let $hour = $("<time>");
$hour.text($firstHour.format("Ha"));
$hour.attr("class", "hour col-1");
$block.append($hour);

let $eventDescription = $("<textarea>");
$eventDescription.text("testing");
$eventDescription.attr("class", "description col-10");
$block.append($eventDescription);

let $saveButton = $("<button>");
let $buttonIcon = $("<i>");
$buttonIcon.attr("class", "fas fa-save");
$saveButton.append($buttonIcon);
$saveButton.attr("class", "saveBtn col-1");
$block.append($saveButton);

// let hourBlocks = []



// let $ulEL = $("<ul>");
// $(".container").append($ulEL);

// for (let i = 0; i < array.length; i++) {
    
//     const element = array[i];
    
// }


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page

