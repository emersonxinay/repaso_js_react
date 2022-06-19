// areeglos en js

// const arreglo = new Array();
const arreglo = [1, 2, 3, 4, 5];
// arreglo.push(2);
let arreglo2 = [...arreglo, 65, 68];

const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
