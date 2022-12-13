let pics_ar = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];

let counter = 0;
window.onload = function () {
  updateUi();
  declareViewEvents();
};

function declareViewEvents() {
  let back_btn = document.querySelector("#back_btn");
  let next_btn = document.querySelector("#next_btn");

  next_btn.addEventListener("click", function () {
    counter++;
    if (counter == pics_ar.length) counter = 0;
    updateUi();
  });

  back_btn.addEventListener("click", function () {
    counter--;
    if (counter == -1) counter = pics_ar.length - 1;
    updateUi();
  });
}

function updateUi() {
  document.querySelector("#id_img").src = `images/${pics_ar[counter]}`;
}
