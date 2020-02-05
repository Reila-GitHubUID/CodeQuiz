# A Coding Quiz with Multiple Choice Questions

## Description

This is a timed quiz on JavaScript fundamentals that stores high scores, so that you can gauge your progress compared to your peers. In this program, you will be presented with a code quiz with multiple-choice questions.

## Usage

* Play proceeds as follows:

  * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (in this case, 10 seconds are subtracted from time remaining). Similarly, answering correctly results in an extra 10 seconds time.

  * When time runs out and/or all questions are answered, the user is directed to a page where they are presented with their final score and asked to enter their initials. 

  * Once the initial has been entered, the user will be directed to the "View Highscores" page. In this page, the user can clear the highscore or play the game again. Notice, the top left corner of the page doesn't have the "View Highscores" text. It is disabled because the user is currently on the page.

* You will be able to check other player's score by clicking "View Highscores" at anytime. Important: if you do check the highscore during a quiz time, your timer will not pause.

* If you decide to check scores during the quiz time, you will see there is only 1 button presented, which is a "Go Back" button, which will direct you back to your last quiz question.

![Quiz Demo](./assets/Quiz-Demo.gif)

## Tests

* I wanted to add a feature where the "View Highscores" page sorts users ranking based on the highest score. Example: A user with the highest score will be ranked #1, and a user with the lowest score will be ranked the last.