function init() {
  declareEvents();
}

function declareEvents() {
  const form = document.querySelector("#id_form");
  const passInp = document.querySelector("#id_pass");
  const checkPass = document.querySelector("#id_check_pass");
  passInp.addEventListener("input", function (e) {
    const paas_val = passInp.value;
    if (paas_val.length < 2) {
      checkPass.innerHTML = "Weak!";
    } else if (paas_val.length < 6 && paas_val.length >= 2) {
      checkPass.innerHTML = "Medium!";
    } else {
      checkPass.innerHTML = "Strong";
    }
  });
  form.addEventListener("submit", function (e) {
    const name_val = document.querySelector("#id_name").value;
    const email1_val = document.querySelector("#id_email1").value;
    const email2_val = document.querySelector("#id_email2").value;
    const paas_val = document.querySelector("#id_pass").value;
    e.preventDefault();

    if (name_val.length < 2) {
      return alert("Name too short");
    } else if (!email1_val.includes("@") || !email1_val.includes(".")) {
      alert("Enter valid email");
    } else if (email1_val !== email2_val) {
      return alert("Email 2 not equal to email 1 ");
    } else if (paas_val.length < 2) {
      return alert("Password too short");
    }
    console.log("form work");
  });
}
init();
