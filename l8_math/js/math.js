window.onload = function () {
  let rnd = Math.random() * 6;
  rnd = Math.ceil(rnd);
  document.querySelector("#id_h2").innerHTML = rnd;

  pow = Math.pow(4, 3);
  document.querySelector("#id_h3a").innerHTML = pow;

  let min = Math.min(5, 2, 8, 1);
  document.querySelector("#id_h3b").innerHTML = min;
};
