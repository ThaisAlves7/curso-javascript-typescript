export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  qtdeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return Math.floor(
      this.produtos.reduce((soma, produto) => soma + produto.preco, 0),
    );
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneta', 1.9);
const produto3 = new Produto('Caneca', 0.9);
const produto4 = new Produto('Monitor', 1499.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4);

console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.qtdeProdutos());
