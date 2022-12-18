const colors_ar = ["red", "yellow", "green", "yellow"];
let counter = 0;
let timer;

function init() {
  declareEvents();
}

function declareEvents() {
  const startBtn = document.querySelector("#start_btn");
  startBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval(function () {
      document.querySelector("#id_h2").style.color = colors_ar[counter];
      counter++;
      if (counter == colors_ar.length) counter = 0;
    }, 1000);
  });

  const stopBtn = document.querySelector("#stop_btn");
  stopBtn.addEventListener("click", function () {
    clearInterval(timer);
  });
}
init();
