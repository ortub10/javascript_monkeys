let coins = 5;
const dice_ar = [
  "dice1.jpg",
  "dice2.jpg",
  "dice3.jpg",
  "dice4.jpg",
  "dice5.jpg",
  "dice6.jpg",
];

function init() {
  updateUi();
  declaeEvents();
  resetGame();
}

function resetGame() {
  coins = 5;
  document.querySelector("#id_win_lose").innerHTML = "";
  updateUi();
}

function declaeEvents() {
  const winLose = document.querySelector("#id_win_lose");
  const rollBtn = document.querySelector("#roll_btn");
  const resetBtn = document.querySelector("#reset_btn");
  resetBtn.addEventListener("click", resetGame);
  rollBtn.addEventListener("click", function () {
    if (coins > 0) {
      coins--;
      let numberCube = Math.ceil(Math.random() * 6); //1-6
      document.querySelector("#id_img").src = `images/${
        dice_ar[numberCube - 1]
      }`;

      if (numberCube >= 5) {
        coins += 2;
        winLose.innerHTML = "win";
        winLose.style.color = "green";
      } else {
        winLose.innerHTML = "lose";
        winLose.style.color = "red";
      }
      updateUi();
    } else {
      alert("Go to the bank, bring money!");
    }
  });
}

function updateUi() {
  document.querySelector("#id_coins").innerHTML = coins;
}
init();
