// function saudacao(nome) {
//   return `Bom dia!, ${nome}`;
// }
// const variavel = saudacao("Thais");
// console.log(variavel);

//Tudo dentro da Função é completamente isolado do resto do Script
// function soma(x = 1, y = 1) {
//   const resultado = x + y;
//   return resultado;
// }
// const resultado = soma(4, 2);
// console.log(resultado);

// const raiz = function (n) {
//   return n ** 0.5;
// };

// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));
// console.log(raiz(64));

//Tipo nova de Função para 1 linha
const raiz = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(64));
