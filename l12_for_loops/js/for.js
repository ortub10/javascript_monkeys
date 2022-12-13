let abc_ar = ["a", "b", "c", "d", "e", "f"];

window.onload = function () {
  //for (let i = 0; i < abc_ar.length; i++) {//for
  // for (let i in abc_ar) { //for in
  // let item = abc_ar[i];
  // document.body.innerHTML += `<h2>${item}</h2>`;
  // }
  //}
  // for (let item of abc_ar) { // for of
  //   document.body.innerHTML += `<h2>${item}</h2>`;
  // }

  abc_ar.forEach(function (item, index) {
    document.body.innerHTML += `<h2>${item}--${index}</h2>`;
  });
};
