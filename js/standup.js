var countDownInterval;

var longCount = 3600;
var shortCount = 300;

var counter = 1;

var remainingSeconds = 0;
var paused = true;

function secondsToMinutesSecondsForDisplay(seconds) {
    var minutes = Math.floor(seconds / 60);
    var displaySeconds = seconds % 60;
    if (displaySeconds < 10) {
        displaySeconds = ":0" + displaySeconds;
    } else {
        displaySeconds = ":" + displaySeconds;
    }
    var value = minutes + displaySeconds;
    return value;
}

function updateTimeRemaining(timerNumber, seconds){
	$("#timeRemaining"+timerNumber).html(secondsToMinutesSecondsForDisplay(seconds));
}

function countDown() {
    if (paused) {
        //do nothing   
    } else {
        updateTimeRemaining(counter, remainingSeconds);
        remainingSeconds -= 1;
        if (remainingSeconds < 0) {
            if (counter == 1) {                
                counter = 2;
                remainingSeconds += shortCount;    
				alert("Stand up and move around!");				
				updateTimeRemaining(counter, remainingSeconds);                
            } else {                
                counter = 1;
                remainingSeconds += longCount;
				alert("Sit back down and get to work!");
				updateTimeRemaining(counter, remainingSeconds);                
            }
        }
    }
}

function onLoad(){
    $("#startTimerButton").button().click(function(){
       paused=!paused;
	   if(paused){
			$("#startTimerButton").button("option","label","Resume");
		}else{
			$("#startTimerButton").button("option","label","Pause");
		}
    });
    remainingSeconds += longCount;
    updateTimeRemaining(1, longCount);
	updateTimeRemaining(2, shortCount);
    countDown();
    countDownInterval = setInterval(countDown, 1000);
}