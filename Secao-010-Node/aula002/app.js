// const multiplicacao = require('./mod')

// console.log(multiplicacao(2, 2))

// const cachorro = require('./mod')

// const dog = new cachorro('Nega')
// // console.log(dog)
// dog.latir()

const path = require("path");
console.log(__dirname); //Obtém o diretório atual

//Diretório buscado pelo path
console.log(
  path.resolve(__dirname, "..", "..", "Exercicios", "ex047-CriandoTimer")
);

// console.log(__filename); //Obtém o nome do arquivo
