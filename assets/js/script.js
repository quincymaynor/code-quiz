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
var question6 = {
    text: "blank",
    options: [1,2,3,4],
    answer: 1,
}
var quizQuestions = [question1, question2, question3, question4, question5, question6]

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
var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

var studentGrade = {
  student: student.value,
  grade: grade.value,
  comment: comment.value.trim()
};

localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
renderMessage();

});

function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}
*/

function highscores() {
    var highscoresList = JSON.parse(localStorage.getItem("highscores"));

    for (let index = 0; index < array.length; index++) {
        
        const element = highscoresList[index];

        var listItem = document.createElement("li");

        listItem.textContent = element;

        var scoresList = document.getElementById("highscores");

        scoresList.appendChild(listItem);
    }
}

/*

var question = function(text, options, answer) {
    return {
        index: 0,
        text: text,
        options: options,
        answer: answer,
        onAnswer: null
    }
}

var quiz = function() {
    function showQuestion(index) {
        if (self.question.length <= index) {
            console.log("all done")
        }
        else {
            questionText.textContent = quizQuestions[index].text;
            answerOptions.textContent = self.question[index].options;
        }
    }

    function doAddQuestion(question) {
        question.index = self.questions.length;
        self.questions.push(question);
        question.onAnswer = function() {
            showQuestion(question.index + 1)
        }
    };

    return {
        timer: null,
        questions: [],
        addQuestion: doAddQuestion
    }    
}

*/