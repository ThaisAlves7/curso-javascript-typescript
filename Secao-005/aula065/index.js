/* 
  Filter => Filtrar o Array/ Objeto
  Filter sempre vai retornar sempre a mesma quantidade de elementos ou menos


  Map => Modificar o Array/ Objeto
  Reduce => Reduzir em 1 único valor

*/

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//   return valor > 10;
// }

// const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

//Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasNomeGrande = pessoas.filter((valor) => valor.nome.length >= 5);
console.log(pessoasNomeGrande);

//Retorne as pessoas com de 50 anos
const pessoasAcima50 = pessoas.filter((valor) => valor.idade > 50);
console.log(pessoasAcima50);

//Retorne as pessoas cujo nome termina com "a"
const pessoasTermA = pessoas.filter((valor) =>
  valor.nome.toLowerCase().endsWith("a")
);
console.log(pessoasTermA);
