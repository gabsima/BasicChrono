function startTimer() {

    milliseconds = setInterval(addMiliseconds, 100);

    $('#start').css('visibility', 'hidden');
    $('#stop').css('visibility', 'visible');
}

function resetTimer() {
    stopTimer();
    $('#minutes').text('00');
    $('#seconds').text('00');
    $('#milliseconds').text('00');
}

function stopTimer() {
    clearInterval(milliseconds);

    $('#start').css('visibility', 'visible');
    $('#stop').css('visibility', 'hidden');
}

function addMinutes() {
    addTimeUnit('minutes', 60);
}

function addSeconds() {
    addTimeUnit('seconds', 60);
}

function addMiliseconds() {
    addTimeUnit('milliseconds', 10);
}

function addTimeUnit(unit, maxValue) {
    var identifier = '#' + unit;
    var numericValue = parseInt($(identifier).text()) + 1;
    if (numericValue == maxValue) {
        if (unit == 'milliseconds') {
            addSeconds();
        }
        if (unit == 'seconds') {
            addMinutes();
        }
        $(identifier).text('00');
    }
    else {
        if (numericValue < 10) {
            $(identifier).text('0' + numericValue);
        }
        else {
            $(identifier).text(numericValue);
        }
    }
}
