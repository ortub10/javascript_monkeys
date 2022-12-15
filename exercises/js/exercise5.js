function init() {
  createPicts();
}

function createPicts() {
  let id_row = document.querySelector("#id_row");
  for (let i = 0; i < 5; i++) {
    let w = 100 + i * 50;
    id_row.innerHTML += `<img src="images/israel.png" alt="israel" width="${w}" /> <br />`;
  }
}

init();
