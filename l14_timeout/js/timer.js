let counter = 0;
let timer;

function init() {
  document.querySelector("#id_h2").innerHTML = counter;
  declareViewEvents();

  // setTimeout(function () {
  //   document.querySelector("#id_h2").innerHTML += "Hello 222";
  // }, 1500);
}

function declareViewEvents() {
  let play_btn = document.querySelector("#play_btn");
  let stop_btn = document.querySelector("#stop_btn");
  play_btn.addEventListener("click", play);
  stop_btn.addEventListener("click", stop);
}

function stop() {
  clearInterval(timer);
}
function play() {
  clearInterval(timer);
  timer = setInterval(function () {
    counter++;
    if (counter > 5) {
      clearInterval(timer);
    } else {
      document.querySelector("#id_h2").innerHTML = counter;
    }
  }, 1000);
}

init();
