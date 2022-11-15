export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  // static falaOi(): void {
  //   console.log('Oi');
  // }

  metodoPadrao(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Luiz', 'Miranda', 30, '987.654.321-99');
const pessoa2 = Pessoa.criaPessoa('Luiz', 'Miranda');

console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoPadrao();
// Pessoa.falaOi();
