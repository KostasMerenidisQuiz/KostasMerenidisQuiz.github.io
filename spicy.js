var quiz = [
  {
    question: "The total world population is",
    choice1: "Over 7 billion",
    choice2: "Less than 7 billion",
    answer: "Over 7 billion"
  },
  {
    question: "Which of the following contries is more populated",
    choice1: "USA",
    choice2: "India",
    answer: "India"
  },
  {
    question: "Which of the 2 is largest",
    choice1: "The monthly League of Legends players",
    choice2: "The population of Germany",
    answer: "The monthly League of Legends players"
  },
  {
    question: "What is the world's largest continent?",
    choice1: "Asia",
    choice2: "America",
    answer: "Asia"
  },
  {
    question: "You are racing in 400m and you pass the person in 2nd place. What is your place now?",
    choice1: "Second",
    choice2: "First",
    answer: "Second"
  },
  {
    question: "What is the largest river in the world?",
    choice1: "Nile",
    choice2: "Amazon",
    answer: "Nile"
  },
  {
    question: "Which of the following chemical element is non metal?",
    choice1: "Na",
    choice2: "Cl",
    answer: "Cl"
  },
  {
    question: "What does 6/8 equal",
    choice1: "0.66",
    choice2: "0.75",
    answer: "0.75"
  },
  {
    question: "What is the largest country in South America?",
    choice1: "Mexico",
    choice2: "Brazil",
    answer: "Brazil"
  },
  {
    question: "Which of the following countries has a faster internet connection speed?",
    choice1: "Romania",
    choice2: "Germany",
    answer: "Romania"
  },
  {
    question: "What is the capital of Australia?",
    choice1: "Sydney",
    choice2: "Canberra",
    answer: "Canberra"
  },
  {
    question: "How many bones does a healthy adult human have?",
    choice1: "206",
    choice2: "176",
    answer: "206"
  },
  {
    question: "Corn is a",
    choice1: "Vegetable",
    choice2: "Fruit",
    answer: "Fruit"
  },
  {
    question: "What is the hardest mineral?",
    choice1: "Diamond",
    choice2: "Ruby",
    answer: "Diamond"
  },
  {
    question: "How many minutes does it take for light from Sun to reach Earth?",
    choice1: "8",
    choice2: "12",
    answer: "8"
  },
  {
    question: "What is the capital of Canada?",
    choice1: "Toronto",
    choice2: "Otawwa",
    answer: "Otawwa"
  },
  {
    question: "The average heart beats of an adult per minute are",
    choice1: "180",
    choice2: "80",
    answer: "80"
  },
  {
    question: "What is the percentage of people living in the northern hemisphere?",
    choice1: "60%",
    choice2: "90%",
    answer: "90%"
  },
  {
    question: "The most likely day to have a heart attack is",
    choice1: "Friday",
    choice2: "Monday",
    answer: "Monday"
  },
  {
    question: "The global rate for washing hands after using the toilet is",
    choice1: "More than 40%",
    choice2: "Less than 20%",
    answer: "Less than 20%"
  },
  {
    question: "Which of the 2 has a bigger population",
    choice1: "Bangladesh",
    choice2: "Russia",
    answer: "Bangladesh"
  },
  {
    question: "Are there more trees or stars?",
    choice1: "Trees",
    choice2: "Stars",
    answer: "Trees"
  },
  {
    question: "The smallest number of children are born on",
    choice1: "Thursday",
    choice2: "Saturday",
    answer: "Saturday"
  },
  {
    question: "The most visited country in the world is",
    choice1: "France",
    choice2: "Spain",
    answer: "France"
  },
  {
    question: "The Canary Islands are named after",
    choice1: "Birds",
    choice2: "Dogs",
    answer: "Dogs"
  },
  {
    question: "The longest place name on the planet is",
    choice1: "85 letters long",
    choice2: "62 letters long",
    answer: "85 letters long"
  },
  {
    question: "How many babies are born every second?",
    choice1: "50",
    choice2: "4",
    answer: "4"
  },
  {
    question: "People 60 years and older make up what percent of the global population?",
    choice1: "12%",
    choice2: "23%",
    answer: "12%"
  },
  {
    question: "People 30 years and younger make up what percent of the global population?",
    choice1: "32%",
    choice2: "52%",
    answer: "52%"
  },
  {
    question: "What percentage of the world's population watched the 2014 FIFA World Cup games?",
    choice1: "35%",
    choice2: "50%",
    answer: "50%"
  },
  {
    question: "The country that has more islands than any other country is",
    choice1: "Sweden",
    choice2: "Greece",
    answer: "Sweden"
  },
  {
    question: "7X7 equals",
    choice1: "56",
    choice2: "49",
    answer: "49"
  },
  {
    question: "11X4 equals",
    choice1: "44",
    choice2: "122",
    answer: "44"
  },
  {
    question: "The division of 63 by 9 equals",
    choice1: "8",
    choice2: "7",
    answer: "7"
  },
];

var dareCorrect = [
  "Choose 2 players. They have to mouth kiss",
  "Choose a boy. The group gives him a new hairstyle",
  "Choose a girl. The group gives her a new hairstyle",
  "Choose a boy. The group decides his pose and you take a photo of him",
  "Choose a girl. The group decides her pose and you take a photo of her",
  "Choose a boy. Empty a water bottle on his head",
  "Choose a girl. Empty a water bottle on her head",
  "Choose a boy. He has to take off a clothing item of your choice",
  "Choose a girl. She has to take off a clothing item of your choice",
  "Choose a player. He/She has to do 10 pushups",
  "Choose 2 players. They have to mouth kiss for 10 seconds",
  "Choose 2 players. They have to mouth kiss",
  "Choose a girl. The group washes off her makeup",
  "Choose 2 players. They have to switch blouses",
  "Choose a boy. He has to post a bad selfie of him on Facebook",
  "Choose a girl. She has to post a bad selfie of her on Facebook",
]

var dareWrong = [
  "Remove a clothing item till the end of the game",
  "Remove a clothing item till the end of the game",
  "Remove a clothing item till the end of the game",
  "Remove a clothing item till the end of the game",
  "Remove a clothing item till the end of the game",
  "Remove a clothing item till the end of the game",
  "Remove a clothing item till the end of the game",
  "Remove a clothing item till the end of the game",
  "Remove a clothing item till the end of the game",
  "Do 10 pushups",
  "Swap blouse with the person on your left",
  "Swap blouse with the person on your right",
  "Swap trousers with the person on your left",
  "Swap trousers with the person on your left",
  "Act like a cat fot the rest of the game",
  "Act like a dog fot the rest of the game",
  "Call a fast-food place and ask for pizza",
  "Call a fast-food place and ask if they are open",
  "Call a pizza place and ask for fast-food",
  "Call a pizza place and ask for fast-food",
  "Stop a car and tell the driver he left his keys out of the door",
  "You have to post a bad selfie of yourself on Facebook"
]

var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var questionCounterText = document.getElementById("questionCounterText");
var scoreText = document.getElementById("scoreText");
var spinner = document.getElementById("spinner");
var main = document.getElementById("main");
var nextQuestion = document.getElementById("nextQuestion");


var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var correctBonus = 1;
var maxQuestions = 10;

function startGame(){
  questionCounter = 0;
  score = 0;
  availableQuestions = [...quiz];
  scoreText.innerHTML = 0;
  getNewQuestion();
  main.classList.remove("hidden");
  spinner.classList.add("hidden");
};



function getNewQuestion(){
  if(availableQuestions.length == 0 ||  questionCounter >= maxQuestions){
    localStorage.setItem("finalScore", score);
    return window.location.assign("./endSpicy.html");
  }
  questionCounter++;
  questionCounterText.innerHTML = questionCounter + "/" + maxQuestions;
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;

  choice1.innerHTML = currentQuestion.choice1;
  choice2.innerHTML = currentQuestion.choice2;

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choice1.addEventListener("click", function(e){
  if(!acceptingAnswers){return;}
  acceptingAnswers = false;

  selectedAnswer = e.target;

  classToApply = "incorrect";
  if(selectedAnswer.innerText == currentQuestion.answer){
    classToApply = "correct";
    selectedAnswer.innerHTML = "<i class='far fa-check-circle tickXicons'></i>";
    score++;
    scoreText.innerHTML = score;

    var dareIndex = Math.floor((Math.random() * dareCorrect.length));
    question.innerHTML = dareCorrect[dareIndex];
  }
  else {
    selectedAnswer.innerHTML = "<i class='far fa-times-circle tickXicons'></i>"

    var dareIndex = Math.floor((Math.random() * dareWrong.length));
    question.innerHTML = dareWrong[dareIndex];
  }
  selectedAnswer.parentElement.classList.add(classToApply);
})


choice2.addEventListener("click", function(e){
  if(!acceptingAnswers){return;}
  acceptingAnswers = false;

  selectedAnswer = e.target;

  classToApply = "incorrect";
  if(selectedAnswer.innerHTML == currentQuestion.answer){
    classToApply = "correct";
    selectedAnswer.innerHTML = "<i class='far fa-check-circle tickXicons'></i>";
    score++;
    scoreText.innerHTML = score;

    var dareIndex = Math.floor((Math.random() * dareCorrect.length));
    question.innerHTML = dareCorrect[dareIndex];
  }
  else {
    selectedAnswer.innerHTML = "<i class='far fa-times-circle tickXicons'></i>"

    var dareIndex = Math.floor((Math.random() * dareWrong.length));
    question.innerHTML = dareWrong[dareIndex];
  }
  selectedAnswer.parentElement.classList.add(classToApply);
})

nextQuestion.addEventListener("click", function(){
  setTimeout(function(){
    selectedAnswer.parentElement.classList.remove(classToApply);
    getNewQuestion();
  }, 500);
});

startGame();
