let data;
let kg;

function init() {
  declareEvents();
  checkLocal();
}

function checkLocal() {
  if (localStorage.getItem("date_local")) {
    data = localStorage.getItem("date_local");
    kg = localStorage.getItem("kg_local");
    updateUi();
  }
}

function declareEvents() {
  const id_form = document.querySelector("#id_form");
  id_form.addEventListener("submit", function (e) {
    const id_date_input = document.querySelector("#id_date_input");
    const id_kg_input = document.querySelector("#id_kg_input");
    e.preventDefault();
    data = id_date_input.value;
    kg = id_kg_input.value;
    localStorage.setItem("date_local", data);
    localStorage.setItem("kg_local", kg);
    updateUi();
  });
}

function updateUi() {
  document.querySelector("#id_date").innerHTML = data;
  document.querySelector("#id_kg").innerHTML = kg;
}
init();
