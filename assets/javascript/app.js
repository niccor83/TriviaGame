//Variables
var timerCount = 10;
var intervalId;
var correctAnsCount = 0;
var incorrectAnsCount = 0;
var unansweredCount = 0;
var questionCount = 0;

var quizQuestions = [
    {
        question: "What is Nacho's real name? ",
        answers: ["Steven", "Ignacio", "Chancho", "Jose"],
        correct: "Ignacio"
    },
    {
        question: "What is Nacho's wrestling partners name? ",
        answers: ["Steven", "Juan Pablo", "Miguel", "Jose"],
        correct: "Steven"
    },
    {
        question: "What is Steven's wrestling name? ",
        answers: ["Ramses", "El Pony", "Silencio", "Esqueleto"],
        correct: "Esqueleto"
    },
    {
        question: "What does Nacho eat to try and gain magical powers? ",
        answers: ["Tigers Blood", "Buffalo Chips", "Eagle Eggs", "Turtle Soup"],
        correct: "Eagle Eggs"
    },
    {
        question: 'According to Nacho, which wrestler is "The Best"? ',
        answers: ["Satan's Cavemen", "El Pony", "Ramses", "Silencio"],
        correct: "Ramses"
    },
    {
        question: "What actor plays Nacho? ",
        answers: ["Mickey Rourke", "Jack Black", "Hector Jimenez", "Jonah Hill"],
        correct: "Jack Black"
    },
    {
        question: "What did Steven steal from Nacho in the alley? ",
        answers: ["Chips", "Money", "His Cart", "Corn"],
        correct: "Chips"
    },
    {
        question: "Nacho has feelings for whom? ",
        answers: ["Candida", "Alejandra", "Jasmin", "Encarnacion"],
        correct: "Encarnacion"
    },
    {
        question: "What does Nacho slip under sister Encarnacion's door? ",
        answers: ["Toast", "Love Note", "Picture", "Book"],
        correct: "Toast"
    },
    {
        question: "What is Nacho's duty at the parish? ",
        answers: ["Pastor", "Cook", "Gardener", "Maintenance"],
        correct: "Cook"
    },
]





//Game functions
function questionSetup() {
    var numberOfQuestions = quizQuestions.length;
    if (questionCount < numberOfQuestions) {
        var question = quizQuestions[questionCount].question;
        var ansChoices = quizQuestions[questionCount].answers;
        $("#question").html(question);
        for (var i = 0; i < ansChoices.length; i++) {
            var a = $("<h4>");
            a.addClass("choice");
            a.attr("data-name", quizQuestions[questionCount].answers[i]);
            a.text(quizQuestions[questionCount].answers[i]);
            $("#answers").append(a);
        }
    }
    else{
        gameOver();
    }
};

function gameOver(){
    clearInterval(intervalId);
    $("#question").html("<h1>Game over!</h1>")
    $("#answers").html("<h3 id='answerTotals'>Correct Answers: " + correctAnsCount + "</h3>");
    $("#answers").append("<h3 id='answerTotals'>Incorrect Answers: " + incorrectAnsCount + "</h3>");
    $("#answers").append("<h3 id='answerTotals'>Unanswered: " + unansweredCount + "</h3>");
    $("#startGame").html("<h3>Start Over?</h3>").show();
    $(document).on("click", "#startGame", function () {
        startTimer();
        questionSetup();
    });
    };

function startTimer(){
    clearInterval(intervalId);
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
    timerCount = 10;
    startTimer();
}
function timeUp(){
    clearInterval(intervalId);
    $("#timer").html("<h3>Times Up!</h3>");
    unansweredCount++;
    setTimeout( function () {
        nextQuestion();
    }, 2000);
}; 
     

function nextQuestion(){
    questionCount++;
    $("#answers").html("<h4></h4>");
    timerReset();
    questionSetup();
     
}



//start game button
$(document).on("click", "#startGame", function(){
    $("#startGame").hide();
    startTimer();    
    questionSetup();
});

//click answers
$(document).on("click", ".choice", function () {
    clearInterval(intervalId); //this stops the timer
    var selectedAns = $(this).attr("data-name");
    var correctAnswer = quizQuestions[questionCount].correct;
    //check to see if selectedAns is equal to correctAnswer
    if(selectedAns === correctAnswer){
        $("#answers").html("<h4>You got it! The correct answer is: " + correctAnswer + "</div>");
        correctAnsCount++;
        setTimeout(function () {
            nextQuestion();
        }, 2000);
    }
    else{
        $("#answers").html("<h4>That is incorrect!</h4>");
        incorrectAnsCount++;
        setTimeout(function () {
            nextQuestion();
        }, 2000);
    }
});