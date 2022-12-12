let abc_ar = ["a", "b", "c", "d"];
let fruits_ar = ["apple", "banana", "coconuts", "melon", "orange", "kiwi"];

window.onload = function () {
  abc_ar.push("e");
  abc_ar.unshift("z");
  abc_ar.pop();
  abc_ar.shift();
  let searchD = abc_ar.indexOf("d");
  abc_ar.splice(searchD, 0, "y");
  console.log(abc_ar);

  let temp_arr = fruits_ar.slice(1, 4);
  console.log(temp_arr);
  console.log(abc_ar.length);
};
