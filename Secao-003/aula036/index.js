//For in => Lê os indices ou chaves do objeto

// const frutas = ["Pêra", "Maçã", "Uva"];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

const pessoas = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: '30'
}

for (let keys in pessoas) {
    console.log(pessoas[keys]);
}


