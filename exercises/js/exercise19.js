function init() {
  declareEvents();
}

function declareEvents() {
  const btns_list = document.querySelectorAll("button[data-bg]");
  btns_list.forEach(function (item) {
    item.addEventListener("mouseover", function (e) {
      e.target.style.background = e.target.dataset["bg"];
      document.querySelector("#id_img").src = e.target.dataset["img"];
    });
    item.addEventListener("mouseleave", function (e) {
      e.target.style.background = "transparent";
    });
  });
}

init();
