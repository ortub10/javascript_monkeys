function init() {
  const user = document.querySelector("#user_input");
  const pass = document.querySelector("#pass_input");

  const logInBtn = document.querySelector("#log_btn");
  logInBtn.addEventListener("click", function () {
    if (user.value == "Biden" && pass.value == "123") {
      window.open("https://www.defense.gov");
    } else if (user.value == "Biden" || pass.value == "123") {
      alert("User or password wrong! Try again");
    } else {
      alert("Try again");
    }
  });
}

init();
