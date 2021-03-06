var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parantheses"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debuging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    },
    {
        title: "Which of the following is NOT a javascript data type?",
        choices: ["Array", "Object", "Table", "String"],
        answer: "Table"
    },
    {
        title: "Which parenthesis type is used to invoke functions?",
        choices: ["{}", "[]", "||", "()"],
        answer: "()"
    },
    {
        title: "What will this statement return: console.log('7' == 7)",
        choices: ["true", "false", "maybe", "depends"],
        answer: "true"
    }
];

let secondsLeft = 15 * questions.length;
let questionNumber = 1;
let timerInterval = null;
let localStorageCount = 0;      // Initialize local storage for the high score;

$(document).ready(function () {

    $("#viewScore").on("click", function () {
        if (localStorageCount <= 1)
            alert("You are the first recorded player.\n There is no scores to display");
        else {
            showScores();            
            let $button1 = $("<button>").attr("id", "goBack").text("Go Back");
            $("#quizField").append($button1);

            $("#goBack").on("click", function() {
                gameStart();
            });
        }
    });

    // This line of code will activate when a user click the Start Quiz button
    $("#startButton").on("click", function () {
        $(".wrapperCenter").empty();   // clear the quiz field
        $(".wrapperCenter").append($("<div>").attr("id", "quizField"));
        timerInterval = setInterval(startTimer, 1000);
        localStorageCount++;
        gameStart();
    });


    // This function is to start the game.
    let $answerField = $("<div>").addClass("answerField");
    function gameStart() {
        $("#quizField").empty();   // clear the quiz field   

        if ($(".wrapperLeft").text() === "")
            $(".wrapperLeft").text("View Highscores");

        if (questions.length >= questionNumber) {
            if (questionNumber >= 1) {       
                let theQuestion = questions[questionNumber - 1];

                let $questionDiv = $("<h3>");
                $questionDiv.text(questionNumber + ". " + theQuestion.title);
                $("#quizField").append($questionDiv);

                let $selectionsDiv = $("<div>").attr("id", "selectButton");
                for (let i = 0; i < theQuestion.choices.length; i++) {
                    $selectionsDiv.append($("<button>").text(theQuestion.choices[i]));
                }
                $("#quizField").append($selectionsDiv);

                // checkAnswer();            
                $("button").on('click', function () {
                    questionNumber++;
                    $(".answerField").empty();   // clear the answer field 

                    if (questionNumber <= questions.length + 1) {
                        // Check answer    
                        let $selectedAnswer = $(this).text();
                        if ($selectedAnswer === theQuestion.answer) {
                            $answerField.attr("id", "footer").text("Correct!").show().fadeOut(2000);
                            secondsLeft = secondsLeft + 10;   // adding 10 seconds time
                            gameStart();
                        }
                        else {
                            $answerField.attr("id", "footer").text("Wrong!").show().fadeOut(2000);
                            if (secondsLeft > 10) {
                                decrementTimer();
                                gameStart();
                            }
                            else {
                                decrementTimer();
                            }
                        }
                    }
                    else {
                        gameEnd();
                    }

                });
                $(".wrapperCenter").append($answerField);
            }
        }
        else {
            gameEnd();
        }
    }

    // This function is for setting up the count down
    function startTimer() {
        $("#counter").text(secondsLeft);
        secondsLeft--;

        // this is to stop the function from looping and start over
        if (secondsLeft === -1) {
            clearInterval(timerInterval);
        }
    }


    // This function will be triggered when a user answered wrong
    // The time left for the user will be deducted by 10 seconds
    function decrementTimer() {
        if (secondsLeft - 10 > 0) {
            secondsLeft = secondsLeft - 10;
        }
        else if (secondsLeft - 10 <= 0) {
            secondsLeft = 0;
            gameEnd();
        }

    }

    // This function will be triggered when the game is over
    function stopTimer() {
        clearInterval(timerInterval);
    }

    // This function executes when the quiz finished
    function gameEnd() {
        stopTimer();

        let $quizField = $("#quizField");
        let $wrapperCenter = $(".wrapperCenter");
        let $form = $("<form>");

        $("#counter").text(secondsLeft);
        $wrapperCenter.append($("<h1>").text("All done!")); // Display "All done! text" line

        $quizField.append($("<div>").text("Your final score is " + secondsLeft));   // Display user's final score line
        $wrapperCenter.append($quizField);

        $quizField.append($form.text("Enter initials: "));   // Display "Enter initials" line
        $form.append($("<input>").attr("type", "text"));
        $form.append($("<input>").attr("type", "Submit").attr("value", "Submit").attr("id", "submitButton"));
        $quizField.append($form);
        $quizField.append($("<p>"));
        $wrapperCenter.append($answerField);

        // click to action line
        $form.submit(function (e) {
            e.preventDefault();

            let $input = $("input").first().val();

            if ($input === "") {
                $answerField.attr("id", "footer").text("Please reenter your initials!").show().fadeOut(4000);
            }
            else {
                let arr = [$input, secondsLeft];
                storeScores(arr);
                showScores();
                showScoresAfterGame();
            }

        });
    }

    function clearScores() {
        localStorage.clear();
        localStorageCount = 0;
    }

    // *************** This function will:
    // 1. sort scores from highest to the lowest
    // 2. store in localStorage
    function storeScores(arr) {
        // if (localStorageCount > 1)
        //     localStorage.clear();
        // else
            localStorage.setItem(localStorageCount, JSON.stringify(arr));
    }

    function showScores() {
        $("#quizField").empty();   // clear the quiz field 
        $("#viewScore").empty();

        let $h3 = $("<h3>");
        $h3.text("Highscores");
        $("#quizField").append($h3);

        let $newDiv = $("<div>");
        for (let i = 1; i <= localStorage.length; i++) {
            let $array = JSON.parse(localStorage.getItem(i));
            $newDiv.append($("<p>").text(i + ". " + $array[0] + " - " + $array[1]));
        }
        $("#quizField").append($newDiv);
    }

    function showScoresAfterGame() {
        // display button options
        let $button1 = $("<button>").attr("id", "playAgain").text("Play Again");
        let $button2 = null;
        if (localStorage.length>0) {
            $button2 = $("<button>").attr("id", "clearScores").text("Clear Highscores");
            $("#quizField").append($button1).append($button2);
        }
        else {
            $button2 = $("<p>").text("Nothing to display");
            $("#quizField").append($button2).append($button1);
        }

        $("#playAgain").on("click", function () {    
            secondsLeft = 15 * questions.length;   // reset the countdown    
            questionNumber = 1; 
            localStorageCount++;
            timerInterval = setInterval(startTimer, 1000);
            
            $(".wrapperCenter").empty();
            $(".wrapperCenter").append($("<div>").attr("id", "quizField"));
            gameStart();
        });

        $("#clearScores").on("click", function () {            
            clearScores();
            showScores();
            showScoresAfterGame();            
        });


    }

});
