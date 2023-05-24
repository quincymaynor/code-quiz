var pageHeading = document.querySelector(".page-heading");
var highscoresPage = document.querySelector(".highscores");
var timer = document.querySelector(".timer");
var timeLeft = document.querySelector("#time-left");

var gameContainer = document.querySelector(".game-container");
var quizStart = document.querySelector(".quiz-start");
var startButton = document.querySelector("#start-button");
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
var question6 = {
    text: "blank",
    options: [1,2,3,4],
    answer: 1,
}
var quizQuestions = [question1, question2, question3, question4, question5, question6]


//timer function
var secondsLeft = 75;
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeLeft.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to end quiz
        endQuiz();
      }
  
    }, 1000);
  }
  
// Function to end quiz
function endQuiz() {
    //record Seconds left
    //switch to submission page
}

function playGame() {
    //quizStart and quizResults display none, quizQuestion display content
    setTime();

    //need to iterate through displaying through each question, for loop?
    for(let index=0; index < quizQuestions.length; index++) {
        //display questionText[index]
        questionText.textContent = quizQuestions[index].text;
        //display possibleAnswers[index] as multiple choice options HOW?????
        answerOptions.textContent = quizQuestions[index].options;
        //compare user input with correctAnswer[index], if correct move to next iteration and if incorrect deduct time and move to next iteration
        answerOptions.addEventListener("click", function(event) {
            var element = event.target;
    
            if (element.matches(".correct-answer")) {
            //move on
            }else{
            //deduct time and move on
            }
        })
    }

    endQuiz();
}

startButton.addEventListener("click", playGame);


//start with langing page being visible and the others with display none

//start button listen for click and make landing page diplay none and quiz end display none, start timer

//QUIZ FUNCTION

//display question one at a time

//if a question is answered incorrectly time is deducted

//once time reaches 0 or all questions are answered save the time left and make quiz display none while submission page is displayed

//SCORE SUBMISSION FUNCTION 

//display time left

//input initials

//move to highscores page

/* 
document.addEventListener("keydown", function(event) {
});


*/