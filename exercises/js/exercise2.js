let lives = 5;
let score = 100;
function init() {
  updateLive();
  updateScore();
  const minusBtn = document.querySelector("#minusBtn");
  minusBtn.addEventListener("click", minus);
}

function minus() {
  if (score > 0) {
    score -= 20;
    updateScore();
  } else if (lives > 0) {
    lives -= 1;
    score = 100;
    updateLive();
    updateScore();
  } else {
    alert("Game Over");
  }
}

function updateLive() {
  document.querySelector("#id_lives").innerHTML = lives;
}
function updateScore() {
  document.querySelector("#id_score").innerHTML = score;
}

init();
