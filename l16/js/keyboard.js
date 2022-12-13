function init() {
  declareEvents();
}

function declareEvents() {
  let id_input = document.querySelector("#id_input");
  id_input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      window.open(`https://www.morfix.co.il/${id_input.value}`);
    }
  });
  //   document.addEventListener("keydown", function (e) {
  //     if (e.key === "Enter") {
  //       alert("Hello");
  //     } else if (e.key === "b") {
  //       alert("bye");
  //     }
  //     console.log("key is dwon", e.key);
  //   });
}

init();
