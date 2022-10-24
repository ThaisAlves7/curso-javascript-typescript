//Symbol => Cria um chave privada dentro do object

const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  //GETTER => Obter o valor do atributo encapsulado
  get velocidade() {
    console.log('SETTER')
    return this[_velocidade];
  }
  
  //SETTER => Manipula o valor do atributo encapsulado
  set velocidade(valor) {
    console.log('GETTER')
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  frear() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Fusca");

// for (let i = 0; i <= 200; i++) {
//   c1.acelerar();
// }

c1.velocidade = 100;
console.log(c1.velocidade);
