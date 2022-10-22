//Factory function (Função Fábrica)
//Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    //GETTER
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //SETTER
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala: function (assunto = "falando sobre NADA") {
      return `${this.nome} está ${assunto}`;
    },

    altura: a,
    peso: p,

    //GETTER
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
const p2 = criaPessoa("João", "Otávio", 1.73, 86);
const p3 = criaPessoa("Junior", "Otávio", 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

// p1.nomeCompleto = "Maria Oliveira Silva";
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());

// console.log(p1.imc);
// console.log(p1.nome);
// console.log(p1.sobrenome);

// const p2 = criaPessoa("Maria", "Joaquina", 1.6, 42);
// console.log(p2.imc());
