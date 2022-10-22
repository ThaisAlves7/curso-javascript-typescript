//Return => Retorna um valor
//Termina a função

// function soma(a, b) {
//   return a + b;
// }

// let valor = soma(5, 6);
// console.log(valor);

// document.addEventListener('click', function(){
//   document.body.style.backgroundColor = 'yellowgreen'
// })

// function criaPessoa(nome, sobrenome) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//   };
// }

// const p1 = criaPessoa("Luiz", "Otávio");
// //A função realiza essa criação exatamente igual a "const p2"
// const p2 = {
//   nome: "João",
//   sobrenome: "Oliveira",
// };

// console.log(typeof p1)
// console.log(typeof p2)

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + " " + resto;
//   }
//   return falaResto;
// }

// // const olaMundo = falaFrase("Olá");
// // console.log(olaMundo('mundo'))

// const fala = falaFrase('Olá')
// const resto = fala('mundo')

// console.log(resto)

// function duplica(n) {
//   return n * 2
// }

// function triplica(n) {
//   return n * 3
// }

// function quadruplica(n) {
//   return n * 4
// }

function criaMultiplicador(multiplicador) {
  //multiplicador
  // function multiplicacao(n) {
  //   return n * multiplicador;
  // }
  // return multiplicacao;

  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)

console.log(duplica(3));
console.log(triplica(2));
console.log(quadruplica(10));
