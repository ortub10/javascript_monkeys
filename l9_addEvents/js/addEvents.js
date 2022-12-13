let counter = 0;
let next_btn;
window.onload = function () {
  updateBodyUI();
  declareBodyEvents();
};

function declareBodyEvents() {
  next_btn = document.querySelector("#next_btn");
  let back_btn = document.querySelector("#back_btn");
  next_btn.addEventListener("click", onNextClick);
  back_btn.addEventListener("click", function () {
    counter--;
    if (counter == 9) {
      next_btn.addEventListener("click", onNextClick);
    }
    updateBodyUI();
  });
}

function onNextClick() {
  counter++;
  if (counter == 10) {
    next_btn.removeEventListener("click", onNextClick);
  }
  updateBodyUI();
}

function updateBodyUI() {
  document.querySelector("#id_h2a").innerHTML = counter;
}
