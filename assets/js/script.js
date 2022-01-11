// Current date displayed at the top of the calendar 
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

// Time block
function timeBlock() {
    var hour = moment().hours();

    $(".time-block").each(function(){
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    });
}

// Save Button
var saveBtn = $(".saveBtn");

saveBtn.on("click", function(){
    var time = $(this).addClass(".hour").text();
    var plan = $(this).addClass(".plan").val();

    localStorage.setItem(time, plan);
});

function usePlan() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if (currentPlan !== null) {
            $(this).addClass(".plan").val(currentPlan);
        }
    });
}

timeBlock();
usePlan();