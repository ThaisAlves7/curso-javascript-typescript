// type Pessoa = {
//   nome: string;
// };

// Declaration merging
interface Pessoa {
  readonly nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: string[];
  readonly idade?: number;
}

const pessoas: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  enderecos: ['Av. Brasil'],
  idade: 30,
};

console.log(pessoas);
