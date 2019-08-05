//Variables
var timerCount = 5;
var intervalId;
var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var questionCount = 0;

var quizQuestions = [
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
]

function questionSetup(){
  var question = quizQuestions[questionCount].question;
  var ansChoices = quizQuestions[questionCount].answers;
  $("#question").text(question); 
  for(var i = 0; i < ansChoices.length; i++){
      console.log(quizQuestions[questionCount].answers[i]);
      $("#answers").append("<h4>" + quizQuestions[questionCount].answers[i] + "</h4>");
  }
    $(document).on("click", "#ansCheck", function () {
        if ($userGuess === quizQuestions[questionCount].correct) {
            console.log("correct answer");
        }
        else {
            console.log("incorrect Answer");
        }
    }) 
};


//Game functions
function startTimer(){
        // clearInterval(intervalId);
    $("#timer").html("<h2>Timer: " + timerCount + "</h2>")
        intervalId = setInterval(count, 1000);      
}
function count() {
    timerCount--;
    $("#timer").html("<h2>Timer: " + timerCount + "</h2>");
    if (timerCount === 0) {
        timeUp();
    }
}

function timerReset(){
    timerCount = 5;
    startTimer();
}
function timeUp(){
    clearInterval(intervalId);
    $("#timer").html("<h3>Times Up!</h3>");
    unanswered++;
    setTimeout( function () {
        nextQuestion()
    }, 3000);

}; 
     

function nextQuestion(){
    timerReset();
    questionCount++;
    questionSetup();
     
}

function questions(){
    
};

$(document).on("click", "#startGame", function(){
    $("#startGame").hide();
    // $("#timer").html("<h2>Timer: " + timerCount + "</h2>")
    startTimer();    
    questionSetup();
});