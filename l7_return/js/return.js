window.onload = function () {
  //   multiReg(5, 4);
  document.querySelector("#id_span").innerHTML = multiReturn(5, 4);
  document.querySelector("#id_span2").innerHTML = multiReturn(5, 3);
  document.querySelector("#id_span3").innerHTML = multiReturn(5, 9);

  let myMulti = multiReturn(4, 2);
  //   alert(myMulti);
  document.querySelector("#id_span4").innerHTML = addTaxVAT(myMulti);
};

function multiReg(_x, _y) {
  document.querySelector("#id_span").innerHTML = _x * _y;
}

function multiReturn(_x, _y) {
  return _x * _y;
}

function addTaxVAT(_price) {
  return _price * 1.17;
}
