//defineProperty => Define 1 propriedade
//defineProperties => Define várias propriedades

// function Produto(nome, preco, estoque) {
//   //público
//   this.nome = nome;
//   this.preco = preco;
//   // this.estoque = estoque;

//   // Não deixa alterar o valor do estoque
//   Object.defineProperty(this, "estoque", {
//     enumerable: true, //Mostra a chave
//     value: estoque, // Mostra o valor
//     writable: false, // Permite a alteração do valor (true) ou não (false)
//     configurable: false, // Permite configurar objeto (true) ou não (false)
//   });

//   // //Permite alterar o valor do estoque
//   // Object.defineProperty(this, "estoque", {
//   //   enumerable: true, //Mostra a chave
//   //   value: estoque, // Mostra o valor
//   //   writable: true, // Permite a alteração do valor (true) ou não (false)
//   //   configurable: false, // Permite configurar objeto (true) ou não (false)
//   // });
// }
// const p1 = new Produto("Camiseta", 20, 3);
// // p1.estoque = 500;
// // console.log(p1);
// console.log(Object.keys(p1));

// for (let chave in p1){
//   console.log(chave)
// }

function Produto(nome, preco, estoque) {
  //público
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
      configurable: false,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: false,
      configurable: false,
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
// p1.estoque = 500;
console.log(p1);
// console.log(Object.keys(p1));

// for (let chave in p1){
//   console.log(chave)
// }