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

        let selectionsDiv = $("<div>").attr("id", "selectButton");
        selectionsDiv.append($("<button>").text("strings"));
        selectionsDiv.append($("<button>").text("booleans"));
        selectionsDiv.append($("<button>").text("alerts"));
        selectionsDiv.append($("<button>").text("numbers"));
        $("#quizField").append(selectionsDiv);

        $("button").on('click', function(){              
            const selectedAnswer = $(this).text();      
            if(selectedAnswer === 'Peanut Butter Jelly'){
              alert("Peanut butter jelly");
              pbjC++;
              const $img = $('<img>');
              $img.attr('src', '')
            } 
          });
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

    function checkAnswer() {

    }

});
