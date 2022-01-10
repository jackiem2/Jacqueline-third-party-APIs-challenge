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
    })
}




timeBlock();