window.onload = function () {
  createButton("USA", "350m");
  createButton("Israel", "9.5m");
};

function createButton(_txt, _pop) {
  let id_row = document.querySelector("#id_row");
  let myBtn = document.createElement("button");
  myBtn.innerHTML = _txt;
  myBtn.className = "btn btn-info ms-2";
  id_row.appendChild(myBtn);

  myBtn.addEventListener("click", function () {
    alert("pop:" + _pop);
  });
}
