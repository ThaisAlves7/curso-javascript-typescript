// '' "" `` => Strings
// { } => Objeto
// new Object ()
//Factory functions/ Constructor functions/ Classes

// const pessoa = {
//   nome: "Luiz",
//   sobrenome: "Otávio",
// };

// const chave = 'sobrenome'
// console.log(pessoa[chave])

//Formas de acessar itens dentro do Objeto
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa["nome"]);
// console.log(pessoa["sobrenome"]);

// const pessoa1 = new Object();
// pessoa1.nome = "Luiz";
// pessoa1.sobrenome = "Otávio";
// pessoa1.idade = 30;
// pessoa1.falarNome = function () {
//   return `${this.nome} está falando seu nome.`;
// };
// pessoa1.getDataNascimento = function () {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };

// for (const chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }

// console.log(pessoa1);
// console.log(pessoa1.getDataNascimento());

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// const pessoa2 = {
//   nome: "Maria",
//   sobrenome: "Oliveira",
// };

// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);

//Remover chave do objetos
// delete pessoa1.nome
// console.log(pessoa1)

//Factory Function
// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     },
//   };
// }
// const p1 = criaPessoa("Luiz", "Otávio");
// console.log(p1.nomeCompleto);

//Constructor Functions
function Pessoa(nome, sobrenome) {
  this.nome = nome,
  this.sobrenome = sobrenome
}

//Cria um objeto vazio. "this => {}"
const p1 = new Pessoa("Luiz", "Otávio");
p1.nome = 'Outra coisa'
console.log(p1);

const p2 = new Pessoa("Maria", "Miranda");
console.log(p2);
