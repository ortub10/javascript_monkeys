const colors_ar = ["black", "red", "orange", "yellow", "green"];
let counter = 0;

function init() {
  updateUi();
  const plusBtn = document.querySelector("#plus_btn");
  const minusBtn = document.querySelector("#minus_btn");
  plusBtn.addEventListener("click", function () {
    counter++;
    if (counter > 4) counter = 0;
    updateUi();
  });

  minusBtn.addEventListener("click", function () {
    counter--;
    if (counter < 0) counter = 4;
    updateUi();
  });
}

function updateUi() {
  const id_h2 = document.querySelector("#id_h2");
  id_h2.innerHTML = counter;
  id_h2.style.color = colors_ar[counter];
}
init();
