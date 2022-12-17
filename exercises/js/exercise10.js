function init() {
  declareEvents();
}

function declareEvents() {
  const form = document.querySelector("#id_form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("form work");
  });
}
init();
