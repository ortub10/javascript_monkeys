function init() {
  declareEvents();
}

function declareEvents() {
  let btns_list = document.querySelectorAll(".container button");
  console.log(btns_list);

  btns_list.forEach(function (item) {
    item.addEventListener("click", showHeb);
  });

  //   let btn1 = document.querySelector("#btn1");
  //   let btn2 = document.querySelector("#btn2");
  //   let btn3 = document.querySelector("#btn3");

  //   btn1.addEventListener("click", showHeb);
  //   btn2.addEventListener("click", showHeb);
  //   btn3.addEventListener("click", showHeb);
}

function showHeb(e) {
  alert(e.target.dataset["heb"]);
}
init();
