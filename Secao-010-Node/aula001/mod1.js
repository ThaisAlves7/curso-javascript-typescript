// const nome = "Luiz";
// const sobrenome = "Miranda";

// const falaNome = () => nome + " " + sobrenome;

// /*
// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome
// */

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "O que eu quiser exportar";
console.log(exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

// module.exports = {
//   nome,
//   sobrenome,
//   Pessoa,
// };

// exports.Pessoa = Pessoa;
