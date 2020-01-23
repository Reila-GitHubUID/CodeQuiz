

"#viewScore"
var startQuizEl = document.querySelector("#startQuiz");

var counterEl = document.getElementById("#counter");
let secondsLeft = 75;

// This function is for the button action.
startQuizEl.addEventListener("click", function(event) {
    event.preventDefault();  
    setTime(true);

    

  });

// This function is for setting up the count down
function setTime(bol) {
    var timerInterval = setInterval(function() {
      counterEl.oninput = secondsLeft;

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