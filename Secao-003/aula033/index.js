const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

// const nome = pessoa.nome;

//Atribuição via desestruturação
// const { nome: teste = "", sobrenome } = pessoa;
const {
  endereco: { rua, numero },
  endereco,
} = pessoa;

console.log(rua, numero, endereco);
