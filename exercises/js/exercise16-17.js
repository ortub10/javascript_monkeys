let minutes = 0,
  seconds = 0,
  miliseconds = 0;
let timer;
function init() {
  updateUi();
  declareEvents();
}

function updtaeTime(_minutes, _seconds, _miliseconds) {
  _miliseconds = _miliseconds < 10 ? `0${_miliseconds}` : _miliseconds;
  _seconds = _seconds < 10 ? `0${_seconds}` : _seconds;
  _minutes = _minutes < 10 ? `0${_minutes}` : _minutes;
  return `${_minutes}:${_seconds}:${_miliseconds}`;
}

function updateUi() {
  document.querySelector("#id_h2").innerHTML = updtaeTime(
    minutes,
    seconds,
    miliseconds
  );
}

function declareEvents() {
  const startBtn = document.querySelector("#start_btn");
  startBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval(function () {
      miliseconds += 10;
      if (miliseconds >= 100) {
        miliseconds = 0;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        }
      }

      updateUi();
    }, 100);
  });

  const stopBtn = document.querySelector("#stop_btn");
  stopBtn.addEventListener("click", function () {
    clearInterval(timer);
  });

  const resetBtn = document.querySelector("#reset_btn");
  resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    updateUi();
  });
}

init();
