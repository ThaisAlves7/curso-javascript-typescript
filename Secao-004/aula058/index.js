//Função construtora => objetos
//Função Fabrica => objetos
//Construtora => Inicia com letra Maiúscula Ex:. Pessoa (new)

class Pessoa {
  constructor(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 1234;

    const metodoInterno = () => {};
    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
      console.log(this.nome + ": Sou um método");
    };
  }
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Maria", "Oliveira");

// console.log(p1.nome);
// console.log(p2.nome);
p2.metodo();
