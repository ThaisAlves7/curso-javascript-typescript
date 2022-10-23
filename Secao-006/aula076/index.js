//Herança
//Camiseta = cor, caneca = material => Produto
//Produto => aumento, desconto

//Função Construtora
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

//Desconto do valor do produto
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

//Aumento do valor do produto
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

//Função Camiseta
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

//Criação da Herança da Função Construtora Produto
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

//Função Caneca => Original
// function Caneca(nome, preco, material) {
//   Produto.call(this, nome, preco);
//   this.material = material
// }

//Função Caneca => Alteração [GETTER/ SETTER]
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, estoque, {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number")
        throw TypeError("O type atribuído não é o esperado");
      estoque = valor;
    },
  });
}

//Criação da Herança da Função Construtora Produto
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

//Instância
const produto = new Produto("Gen", 111);
const camiseta = new Camiseta("Regata", 7.5, "Preta");
const caneca = new Caneca("Geek", 75, "Porcelana", 5);
caneca.estoque = 100

//Descontos e Aumento
camiseta.aumento(10);
caneca.desconto(30);

//Visualização das Informações
console.log(camiseta);
console.log(produto);
console.log(caneca);
