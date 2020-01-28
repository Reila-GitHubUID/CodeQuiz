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

// "#viewScore"
// "#startButton"
// "#counter"
// "#quizField"

let secondsLeft = 15; //* questions.length;
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
        $("#quizField").empty();   // clear the quiz field
        startTimer();
        gameStart();

    });

    
    // This function is to start the game.
    function gameStart() {
        if (questions.length != questionNumber-1) {
            let theQuestion = questions[questionNumber-1];

            let $questionDiv = $("<h3>");
            $questionDiv.text(questionNumber + ". " + theQuestion.title);
            $("#quizField").append($questionDiv);

            let $selectionsDiv = $("<div>").attr("id", "selectButton");
            for (let i = 0; i < theQuestion.choices.length; i++){
                $selectionsDiv.append($("<button>").text(theQuestion.choices[i]));
            }
            $("#quizField").append($selectionsDiv);

            //reading user answer to the multiple choice
            $("button").on('click', function(){     
                questionNumber++;

                if (questionNumber >= 2) {

                    let $answerField = $("<div>");

                    // Check answer
                    let $selectedAnswer = $(this).text();      
                    if($selectedAnswer === theQuestion.answer){
                    $answerField.attr("id", "footer").text("Correct!");
                    } 
                    else {
                        $answerField.attr("id", "footer").text("Wrong!");
                    }
                    $("#quizField").append($answerField);
                    gameStart();
                } 
                else {

                }



            });
            
        }
        else {
            allDone();
        }
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

    // This function executes when the quiz finished
    function allDone() {

    }

    function gameReset() {
        $("#quizField").empty();   // clear the quiz field        
    }

    function clearScores() {
        localStorage.removeItem("score");
    }

    function saveScore(str) {
        localStorage.setItem(str, highScore);
        highScore = 0;
        questionNumber = 1;
    }
});
