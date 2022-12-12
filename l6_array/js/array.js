let abc_ar = ["a", "b", "c", "d"];
let user = "Koko";

window.onload = function () {
  console.log("hello from console");
  console.log(user);
  console.log(abc_ar);
  document.querySelector("#id_h2").innerHTML = abc_ar[2];
  abc_ar[4] = "e";
  console.log(abc_ar);
};
