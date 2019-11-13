// variables
var highscores = document.querySelector("#highscores");
var countdown = document.querySelector("#countdown");
var title = document.querySelector("#title");
var welcome = document.querySelector("#welcome");
var startbtn = document.querySelector("#startbtn");

// questions
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
];

// home page
countdown.innerHTML = (questions.length*15);

// start game
startbtn.addEventListener("click", function(event) {
  event.preventDefault();
  setTime();
  askQuestions();
});

var secondsLeft = (questions.length*15)

function setTime () {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countdown.innerHTML = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      return;
    }

  }, 1000);
}

function askQuestions () {
  welcome.remove();
  startbtn.remove();

  for (var i = 0; i < questions.length; i++) {


  }

}