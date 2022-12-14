let widthImg = 300;
const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");
function init() {
  updateBody();
  plusBtn.addEventListener("click", plus);
  minusBtn.addEventListener("click", minus);
}

function plus() {
  widthImg += 10;
  if (widthImg > 400) {
    widthImg = 400;
  }
  updateBody();
}
function minus() {
  widthImg -= 10;
  if (widthImg < 200) {
    widthImg = 200;
  }
  updateBody();
}

function updateBody() {
  document.querySelector("#id_img").width = widthImg;
}

init();
