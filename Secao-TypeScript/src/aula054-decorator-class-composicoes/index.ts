interface Contructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function <T extends Contructor>(target: T): T {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.cor = this.inverte(args[0]);
        this.nome = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function outroDecorador(param1: string) {
  return function (target: Contructor) {
    console.log('Sou o outro decorador' + param1);
    return target;
  };
}

@outroDecorador('O parâmetro do outro decorador')
@inverteNomeECor('Valo1', 'Valor2')
export class Animal {
  constructor(public cor: string, public nome: string) {
    console.log('Sou a CLASSE');
  }
}

const animal = new Animal('roxo', 'Thais');
console.log(animal);
