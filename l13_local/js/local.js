function init() {
  checkLocal();
  declareBodyEvents();
}

function checkLocal() {
  if (localStorage.getItem("user")) {
    let user = localStorage.getItem("user");
    document.querySelector("#id_h1").innerHTML = `Welcome ${user} to our site`;
  }
}

function declareBodyEvents() {
  let save_btn = document.querySelector("#save_btn");
  save_btn.addEventListener("click", function () {
    let input_val = document.querySelector("#id_input").value;
    localStorage.setItem("user", input_val);
    checkLocal();
  });
}
init();
