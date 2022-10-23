/* 
  Filter => Filtrar o Array/ Objeto
  Filter sempre vai retornar sempre a mesma quantidade de elementos ou menos

  Map => Modificar o Array/ Objeto
  Map vai retornar o Array exatamente do mesmo tamanho mais com valores alterados

  Reduce => Reduzir em 1 único valor
  Reduz o Array a único elemento

*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Some todos os números (reduce)
// const total = numeros.reduce(function (acumulador, valor) {
//   acumulador += valor
//   return acumulador;
// }, 0);
// console.log(total);

//Retorne um array com os pares (Filter)
// const pares = numeros.reduce(function (acumulador, valor) {
//   if (valor % 2 === 0) acumulador.push(valor);
//   return acumulador;
// }, []);
// console.log(pares);

//Retorne um array com o dobro do valores (map)
// const dobro = numeros.reduce(function (acumulador, valor) {
//   acumulador.push(valor * 2)
//   return acumulador;
// }, []);
// console.log(dobro);

//Retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador
  return valor
});

console.log(maisVelha);