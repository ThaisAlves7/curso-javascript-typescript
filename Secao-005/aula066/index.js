/* 
  Filter => Filtrar o Array/ Objeto
  Filter sempre vai retornar sempre a mesma quantidade de elementos ou menos

  Map => Modificar o Array/ Objeto
  Map vai retornar o Array exatamente do mesmo tamanho mais com valores alterados

  Reduce => Reduzir em 1 único valor

*/

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const dobro = numeros.map((valor) => valor * 2);
// console.log(dobro)

//Para cada elemento:

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

//Retorne o apenas uma string com o nome da pessoa
const pessoa = pessoas.map((valor) => valor.nome);
// console.log(pessoa)

//Remova apenas a chave "nome" do objeto (Retornar apenas a idade)
const idade = pessoas.map((valor) => ({ idade: valor.idade }));
// console.log(idade)

//Adicione uma chave id em cada objeto
const id = pessoas.map(function (valor, indice) {
  const newPessoas = {...pessoas}
  newPessoas.id = indice;
  return newPessoas;
});
console.log(pessoas);
console.log(id);
