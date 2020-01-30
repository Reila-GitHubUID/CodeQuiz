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

let secondsLeft = 15 * questions.length;

let questionNumber = 1;
let timerInterval = null;

// Initialize local storage for the high score;
localStorage.setItem("score", 0);
$("#viewScore").on("click", function() {
    alert ("Your current score is " + localStorage.getItem("score") + ".");
});

$(document).ready(function() {
    // This line of code will activate when a user click the Start Quiz button
    $("#startButton").on("click", function() {
        $(".wrapperCenter").empty();   // clear the quiz field
        $(".wrapperCenter").append($("<div>").attr("id", "quizField"));
        timerInterval = setInterval(startTimer, 1000);
        gameStart();

    });

    
    // This function is to start the game.
    let $answerField = $("<div>").addClass("answerField");
    function gameStart() {
        $("#quizField").empty();   // clear the quiz field        

        if (questions.length >= questionNumber) {
            let theQuestion = questions[questionNumber-1];

            let $questionDiv = $("<h3>");
            $questionDiv.text(questionNumber + ". " + theQuestion.title);
            $("#quizField").append($questionDiv);

            let $selectionsDiv = $("<div>").attr("id", "selectButton");
            for (let i = 0; i < theQuestion.choices.length; i++){
                $selectionsDiv.append($("<button>").text(theQuestion.choices[i]));
            }
            $("#quizField").append($selectionsDiv);
            
            // checkAnswer();            
            $("button").on('click', function(){     
                questionNumber++;
                $(".answerField").empty();   // clear the answer field 

                if (questionNumber <= questions.length+1) {
                    // Check answer    
                    let $selectedAnswer = $(this).text();      
                    if($selectedAnswer === theQuestion.answer){
                        $answerField.attr("id", "footer").text("The answer to the previous question is correct!");
                        secondsLeft = secondsLeft+10;   // adding 10 seconds time
                        gameStart();
                    } 
                    else {
                        $answerField.attr("id", "footer").text("The answer to the previous question is wrong!");
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
                    console.log("aaaaaaaaaa");
                }

            });
            $(".wrapperCenter").append($answerField);
    
        }
        else {
            gameEnd();
            console.log("bbbbbbbbb");
        }
    }

    // This function is for setting up the count down
    function startTimer() {
        $("#counter").text(secondsLeft);
        secondsLeft--;

        // this is to stop the function from looping and start over
        if(secondsLeft === -1) {
            clearInterval(timerInterval);
        }
    }
       

    // This function will be triggered when a user answered wrong
    // The time left for the user will be deducted by 10 seconds
    function decrementTimer() {
        if (secondsLeft-10 > 0) {
            secondsLeft = secondsLeft-10;
        }
        else if (secondsLeft-10 <=0) {
            secondsLeft = 0;
            gameEnd();
            console.log("ccccccc");
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
        
        // $quizField.append($form.text("Enter initials: "));   // Display "Enter initials" line
        // $form.append($("<input>"));
        // $form.append($("<button>").attr("id", "submitButton").text("Submit"));
        // $quizField.append($form);
        // $quizField.append($("<p>"));        
        // $wrapperCenter.append($answerField);

        $quizField.append($form.text("Enter initials: "));   // Display "Enter initials" line
        $form.append($("<input>").attr("type", "text"));
        $form.append($("<input>").attr("type", "Submit").attr("value", "Submit").attr("id", "submitButton"));
        $quizField.append($form);
        $quizField.append($("<p>"));        
        $wrapperCenter.append($answerField);

        // click to action line
        $("#submitButton").on("submit", function() {
            let $input = $("input");
            console.log("$input is " + $input);

            if ($input === "") {
                saveScore($input);
                console.log("$input is empty");
            }
            else {
                console.log("$input is " + $input);
            }
    
        });
    }

    function gameReset() {
        $("#quizField").empty();   // clear the quiz field
        questionNumber = 1;       
    }

    function clearScores() {
        localStorage.removeItem();
    }

});
