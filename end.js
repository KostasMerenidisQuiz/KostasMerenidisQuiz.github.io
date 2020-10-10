var finalScore = document.getElementById("finalScore");
var username = document.getElementById("username");
var saveScore = document.getElementById("saveScore");

saveScore.addEventListener("click", saveHighScore);

finalScore.innerHTML = localStorage.getItem("finalScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var maxHighScores = 5;

function saveHighScore(e){
e.preventDefault();
  var score = {
    score: finalScore.innerHTML,
    name: username.value
  };
  highScores.push(score);

 highScores.sort((a, b) => b.score - a.score);
  highScores.splice(10);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("./index.html");
}
