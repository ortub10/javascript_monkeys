function init() {
  createMultiplicationTable();
}

function createMultiplicationTable() {
  let id_h3 = document.querySelector("#id_h3");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      id_h3.innerHTML += `${(i + 1) * (j + 1)} |`;
    }
    id_h3.innerHTML += "<br />";
  }
}

init();
