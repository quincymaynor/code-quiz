var pageHeading = document.querySelector(".page-heading");
var highscoresPage = document.querySelector(".highscores");
var timer = document.querySelector(".timer");
var timeLeft = document.getElementById("time-left");

var gameContainer = document.querySelector(".game-container");
var quizStart = document.querySelector(".quiz-start");
var startButton = document.getElementById("start-button");
var quizQuestion = document.querySelector(".quiz-question");
var questionText = document.querySelector(".question-text");
var answerOptions = document.querySelector(".answer-options");
var correctAnswer = document.querySelector(".correct-answer");

var quizResults = document.querySelector(".quiz-results");
var result = document.querySelector(".result");
    
var question1 = {
    text: "What does the method .pop() do?",
    options: ["Adds elements to the end of an array", "Removes the last element of an array", "Adds elements to the beginning of an array", "Removes the first element of an array"],
    answer: "Removes the last element of an array",
}
var question2 = {
    text: "What does JSON stand for?",
    options: ["JavaScript Object Notation",2,3,4],
    answer: "JavaScript Object Notation",
}
var question3 = {
    text: "What is the easiest way to remove whitespace from a string?",
    options: [".trim()", ".trimStart()", ".trimAll()", ".trimEnd()"],
    answer: ".trim()",
}
var question4 = {
    text: "What does the method .unshift() do?",
    options: ["Removes the first element of an array", "Concatenates sub-array elements", "Selects part of an array and returns the new array", "adds new elements to the beginning of an array"],
    answer: "adds new elements to the beginning of an array",
}
var question5 = {
    text: "What does DOM stand for?",
    options: [1,2,"Document Object Model",4],
    answer: "Document Object Model",
}

var quizQuestions = [question1, question2, question3, question4, question5]

var currentQuestion = quizQuestions[0];

//timer function
var secondsLeft = 75;
function setTime() {

    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeLeft.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
  
    }, 1000);
  }

//function to show qustions
function pushQuestion() {
    
    questionText.textContent = currentQuestion.text;

    for(index=0; index < 4; index++) {
        var listItem = document.createElement("li");
        var listButton = document.createElement("button");

        listButton.classList.add('answer-btn')
        listButton.textContent = currentQuestion.options[index];

        listItem.appendChild(listButton);
        answerOptions.appendChild(listItem);
    }

    answerOptions.addEventListener("click", function(event) {
        var userChoice = event.target.classList.contains('answer-btn');
    
        if (userChoice == correctAnswer) {
        quizQuestions++;
        }else{
        secondsLeft-10;
        quizQuestions++;
        }
    })

}
  
//function to end quiz
function endQuiz() {
    //record Seconds left to local storage
    quizStart.setAttribute("style", "display:none");
    quizQuestion.setAttribute("style", "display:none");
    quizResults.setAttribute("style", "display:content");
}

quizQuestion.setAttribute("style", "display:none");
quizResults.setAttribute("style", "display:none");

//game function
function playGame() {
    quizStart.setAttribute("style", "display:none");
    quizQuestion.setAttribute("style", "display:content");
    quizResults.setAttribute("style", "display:none");

    setTime();

    pushQuestion();

}

startButton.addEventListener("click", playGame);

//highscores page
function highscores() {
    var highscoresList = JSON.parse(localStorage.getItem("highscores"));

    for (let index = 0; index < array.length; index++) {
        
        var element = highscoresList[index];
        var listItem = document.createElement("li");

        listItem.textContent = element;

        var scoresList = document.getElementById("highscores");

        scoresList.appendChild(listItem);
    }
}