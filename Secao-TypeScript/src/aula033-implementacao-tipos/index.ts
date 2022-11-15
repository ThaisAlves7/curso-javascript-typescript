// export abstract class TipoPessoa {
//   protected abstract nome: string;
//   protected abstract sobrenome: string;
//   protected abstract nomeCompleto(): string;
// }

// export class Pessoa extends TipoPessoa {
//   constructor(public nome: string, public sobrenome: string) {
//     super();
//   }

//   nomeCompleto(): string {
//     return this.nome + ' ' + this.sobrenome;
//   }
// }

type TipoNome = {
  nome: string;
  // sobrenome: string;
  // nomeCompleto(): string;
  // nomeCompleto: () => string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
