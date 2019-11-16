// global variables
var highscores = document.querySelector("#highscores");
var countdown = document.querySelector("#countdown");
var heading = document.querySelector("#heading");
var message = document.querySelector("#message");
var startbtn = document.querySelector("#startbtn");
var mainContent = document.querySelector("#main-content");
var listofchoices = document.querySelector("#listofchoices");
var totalScore = 0
var questionNumber = 0

// questions array
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
    title: "What is the name of Luke Skywalker's home planet in Star Wars Episode IV: A New Hope?",
    choices: ["Tatooine", "Dantooine", "Mustafar", "Naboo"],
    answer: "Tatooine"
  }
];

// initialize countdown
countdown.innerHTML = (questions.length*5);

// start game
startbtn.addEventListener("click", function(event) {
  event.preventDefault();
  setTime();
  askQuestions();
});

// start timer
var secondsLeft = (questions.length*5)

function setTime () {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countdown.innerHTML = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      document.getElementById("heading").innerHTML="<h3>Game Over</h3>" + "<h4>Final score: </h4>" + totalScore;
      document.getElementById("message").innerHTML="<p>Enter your name or initials for the leaderboard:</p>";
      document.getElementById("listofchoices").innerHTML="<input></input>";
      var submit = document.createElement("button");
      submit.textContent = "Submit";
      listofchoices.appendChild(submit);
    }

  }, 1000);
}

// askQuestions function for loading questions and multiple choice options

function askQuestions () {

  //remove welcome message and start button
  document.getElementById("message").innerHTML=("");
  startbtn.remove();

  // fill question and create response buttons with eventListener
  heading.textContent = questions[questionNumber].title;
  
  for (var i=0; i < questions[questionNumber].choices.length; i++) {
    var answerText = questions[questionNumber].choices[i];
    var option = document.createElement("button");
    option.textContent = answerText;
    option.classList.add("responses");
    option.setAttribute("data-answer", answerText);
    option.addEventListener("click", checkAnswer);
    listofchoices.appendChild(option);
  }

}

// confirm and load next question
function clearBox() {
  document.getElementById("heading").innerHTML="<h1>Correct!</h1>";
  document.getElementById("listofchoices").innerHTML="";
  setTimeout(askQuestions, 500);
}

// use click event to check user response
function checkAnswer() {
  var selection = this.getAttribute("data-answer");
  console.log(selection);
    if (selection === questions[questionNumber].answer) {
      totalScore += secondsLeft;
      console.log(totalScore);
      questionNumber++;
      clearBox();
    } else {
      var nope = document.createElement("h3");
      nope.textContent = "WRONG";
      listofchoices.appendChild(nope);
      }
} 

// display leaderboard

function updateBoard() {

}
