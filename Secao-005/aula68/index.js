//Unir Filter + Map + Reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const pares = numeros
//   .filter(function (valor) {
//     return valor % 2 === 0;
//   })
//   .map(function (valor) {
//     return valor * 2;
//   }).reduce(function(ac, valor){
//     return ac += valor
//   });

const pares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => (ac += valor));

console.log(pares);

//Filtrar pares
//[ 50, 80, 2, 8, 22 ]

//Dobrar os valores
// [ 100, 160, 4, 16, 44 ]

//Reduzir (somar tudo)
//324
