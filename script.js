

// "#viewScore"
// "#startButton"
// "#counter"
// "#quizField"

let secondsLeft = 10;

// This line of code will activate when a user click the Start Quiz button
$(document).ready(function() {
    $("#startButton").on("click", function() {
        $("#quizField").empty();
        startTimer();
        gameStart();
    });
});

// This function is to start the game.
function gameStart() {

}

// This function is for setting up the count down
function startTimer() {
    var timerInterval = setInterval(function() {
        $("#counter").text(secondsLeft);
        secondsLeft--;
        
        // this is to stop the function from looping and start over
        if(secondsLeft === -1) {
            clearInterval(timerInterval);
        }
        console.log("in in the timer(value) function");
  
    }, 1000);
  }

  // This function will be triggered when a user answered wrong
  // The time left for the user will be deducted by 10 seconds
  function decrementTimer() {
    secondsLeft = secondsLeft-10;
    startTimer();
  }