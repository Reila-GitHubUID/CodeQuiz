

// "#viewScore"
// "#startButton"
// "#counter"
// "#quizField"

let secondsLeft = 10;
let highScore = 0;

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
        debugger;
        let questionDiv = $("<h5>");
        questionDiv.text("Commonly used data types DO NOT include:");
        // let multipleChoice = $("<ul>");
        // multipleChoice.append($("<li>").text("strings"));
        // multipleChoice.append($("<li>").text("booleans"));
        // multipleChoice.append($("<li>").text("alerts"));
        // multipleChoice.append($("<li>").text("numbers"));

        $("quizField").append(questionDiv);
        console.log ("I'm here!")
        // $("quizField").append(multipleChoice);
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
