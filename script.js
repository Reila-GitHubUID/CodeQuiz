

"#viewScore"
"#startQuiz"

var counterEl = document.getElementById("#counter");
let secondsLeft = 75;

// This function is for setting up the count down
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      counterEl.textContent = secondsLeft;
  
      // this is to stop the function from looping and start over
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
    // 1000ms is the time to wait before secondsLeft counting down
  }