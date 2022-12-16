function init() {
  const colors_ar = ["yellow", "green", "blue", "silver"];
  const id_row = document.querySelector("#id_row");

  colors_ar.forEach(function (item) {
    const btn = document.createElement("button");
    btn.innerHTML = item;
    btn.style.background = item;
    btn.addEventListener("click", function () {
      btn.style.background = "white";
    });
    id_row.append(btn);
  });
}
init();
