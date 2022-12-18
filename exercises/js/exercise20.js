let fileName1 = "united_kindom.jpg";
let fileName2 = "united_state_of_america.jpg";
let fileName3 = "the_brown_fox_is_good_fox.png";
function init() {
  part1();
  part2();
  part3();
}
function part1() {
  let st = fileName1.replace("_", " ");
  st = st.replace(".jpg", "");
  document.querySelector("#id_h2a").innerHTML = st;
}

function part2() {
  let st = fileName2.replace(".jpg", "");
  while (st.indexOf("_") > -1) {
    st = st.replace("_", " ");
  }
  document.querySelector("#id_h2b").innerHTML = st;
}
function part3() {
  document.querySelector("#id_h2c").innerHTML = fileToWords(fileName3);
}
function fileToWords(_fileName) {
  let st = _fileName;
  let lastPoint = 0;
  while (st.indexOf("_") != -1) {
    st = st.replace("_", " ");
  }
  while (st.indexOf(".", lastPoint + 1) > -1) {
    lastPoint = st.indexOf(".", lastPoint + 1);
  }
  st = st.substr(0, lastPoint);
  return st;
}
init();
