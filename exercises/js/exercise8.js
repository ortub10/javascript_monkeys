function init() {
  const colors_ar = ["yellow", "green", "blue", "silver"];
  const id_row = document.querySelector("#id_row");
  for (let i = 0; i < colors_ar.length; i++) {
    const item = colors_ar[i];
    id_row.innerHTML += `<button style = "background:${item};">${item}</button>`;
  }
}
init();
