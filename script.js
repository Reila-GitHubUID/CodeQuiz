

// "#viewScore"
// "#startButton"
// "#counter"
// "#quizField"

let secondsLeft = 10;
let highScore = 0;
let questionNumber = 1;

// Initialize local storage for the high score;
localStorage.setItem("score", highScore);
$("#viewScore").on("click", function() {
    alert ("Your current score is " + localStorage.getItem("score") + ".");
});

$(document).ready(function() {
    // This line of code will activate when a user click the Start Quiz button
    $("#startButton").on("click", function() {
        $("#quizField").empty();
        startTimer();
        gameStart();
    });

    
    // This function is to start the game.
    function gameStart() {
        let questionDiv = $("<h3>");
        questionDiv.text(questionNumber + ". Commonly used data types DO NOT include:");
        $("#quizField").append(questionDiv);


        $("#quizField").append($("<button>").attr("id", "startButton").text("strings"));
        $("#quizField").append($("<button>").attr("id", "startButton").text("booleans"));
        $("#quizField").append($("<button>").attr("id", "startButton").text("alerts"));
        $("#quizField").append($("<button>").attr("id", "startButton").text("numbers"));
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
        }, 1000);
    }

    // This function will be triggered when a user answered wrong
    // The time left for the user will be deducted by 10 seconds
    function decrementTimer() {
        secondsLeft = secondsLeft-10;
        startTimer();
    }


});
