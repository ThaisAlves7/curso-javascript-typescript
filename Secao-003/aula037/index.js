/*
  For clássico - Geralmente com iteráveis (array ou strings)
  For ín - Retorna o índice ou chave (array, strings, objetos)
  For ín - Retorna o valor em si (array, strings, iteráveis)
  
 */

// const nome = "Luiz Otávio";
const nome = ["Luiz", "Otávio", "Henrique"];

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// console.log("####");

// for (let i in nome) {
//   console.log(nome[i]);
// }

// console.log("####");

// for (let valor of nome) {
//   console.log(valor);
// }

nome.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
