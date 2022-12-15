function init() {
  addItem("Hamburger", "hamburger.jpg", 294.9, 36);
  addItem("Schnitzel", "schnitzel.jpg", 234, 32);
  addItem("Spring chicken", "spring_chicken.jpg", 190, 37);
  addItem("Shawarma", "shawarma.jpg", 392.3, 35);
}

function addItem(_name, _image, _calories, _price) {
  let id_row = document.querySelector("#id_row");
  id_row.innerHTML += `<h2>${_name}</h2>`;
  id_row.innerHTML += `<img src = "images/${_image}" alt = "${_name}" width = 200>`;
  id_row.innerHTML += `<div>Calories: ${_calories}</div>`;
  id_row.innerHTML += `<div>Price: ${_price} NIS</div>`;
  id_row.innerHTML += `<hr />`;
}
init();
