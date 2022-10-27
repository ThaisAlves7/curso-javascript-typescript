const nome = "Luiz";
const sobrenome = "Miranda";
const idade = 30;
const cpf = "asdasdasd";

// export function soma(x, y) {
//   return x + y;
// }

function soma(x, y) {
  return x + y;
}

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma };

// export { nome as nome2, sobrenome, idade, soma };
