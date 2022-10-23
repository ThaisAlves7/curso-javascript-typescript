//defineProperty => Getter e Setter

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      //valida tipo antes da alteração
      if (typeof valor !== "number") {
        throw new TypeError("Você precisa passar um valor do tipo numérico");
      }
      estoquePrivado = valor;
      // console.log(valor)
    },
  });
}
// const p1 = new Produto("Camiseta", 20, 3);
// console.log(p1);
// p1.estoque = "O valor que eu quero";
// p1.estoque = 500;
// console.log(p1.estoque);

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa', '')
      nome = valor;
    },
  };
}


const p2 = criaProduto("Moletom");
console.log(p2);
p2.nome = "Qualquer coisa";
console.log(p2.nome);
// p2.estoque = 500;
