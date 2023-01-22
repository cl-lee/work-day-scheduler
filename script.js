// --- Displays the current day at the top of the calender ---
let today = moment()
$("#currentDay").text(moment().format("dddd, Do MMMM YYYY"));

// --- array for setting and storing the hours on display in the timeblocks ---
// sets the starting hour, and the number of timeblocks in the calendar
let startingHour = 9;
let timeblocksAmount = 9;

// hours arrays for displaying the hours in timeblocks
let hours = [];
for (let hour = startingHour; hour < startingHour + timeblocksAmount; hour++) {
    hours.push(hour);
}

// --- Codes for displaying timeblocks ---
for (let i = 0; i < timeblocksAmount; i++) {

    let hourInMoment = moment().set({ "h": hours[i], "s": 0, "ms": 0 });

    let $block = $("<div>");
    $block.attr("class", "row");
    $(".container").append($block);

    let $hour = $("<time>");
    $hour.text(hourInMoment.format("hA"));
    $hour.attr("class", "hour col-1");
    $hour.attr("data-time", hourInMoment.format("hA"));
    $block.append($hour);

    let $eventDescriptionEL = $("<textarea>")
    $eventDescriptionEL.attr("class", "description col-10");
    $eventDescriptionEL.text(localStorage.getItem($hour.attr("data-time")));
    $block.append($eventDescriptionEL);

    let $saveButton = $("<button>");
    let $buttonIcon = $("<i>");
    $buttonIcon.attr("class", "fas fa-save saveAction");
    $saveButton.append($buttonIcon);
    $saveButton.attr("class", "saveBtn col-1 saveAction");
    $block.append($saveButton);

    // Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    if (today.isAfter(hourInMoment, "hour")) {
        $eventDescriptionEL.addClass("past");
    } else if (today.isSame(hourInMoment, "hour")) {
        $eventDescriptionEL.addClass("present");
    } else {
        $eventDescriptionEL.addClass("future");
    }
}

// stores event and time when clicking on the "save" button
$("button").on("click", function (event) {

    let $eventDescription = $(event.target).parentsUntil(".container").children("textarea").val();
    let $eventTime = $(event.target).parentsUntil(".container").children(".hour").attr("data-time");

    localStorage.setItem($eventTime, $eventDescription);
})