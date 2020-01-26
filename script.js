

"#viewScore"
"#startButton"
"#counter"

let secondsLeft = 75;

// This line of code will activate when a user click the Start Quiz button
$(document).ready(function() {
    $("#startButton").on("click", function() {
        $("#quizField")
      const randomNum = Math.floor (Math.random() * 1000)+1;
      $("#random-number").text(randomNum);
    });

    // ...

  });
// startButton.addEventListener("click", function(event) {
//     event.preventDefault();  
//     setTime(true);
//     startGame();
// });

// This function is to start the game.
function startGame() {

}

// This function is for setting up the count down
function setTime(bol) {
    var timerInterval = setInterval(function() {
      counter.oninput = secondsLeft;

      if (bol) {
          secondsLeft = secondsLeft-10;
      }
      else {
        secondsLeft--;
      }
  
      // this is to stop the function from looping and start over
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }