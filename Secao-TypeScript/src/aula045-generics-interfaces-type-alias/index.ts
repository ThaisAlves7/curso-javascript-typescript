interface PessoaProtocolo<T = string, U = number> {
  // interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Katie',
  sobrenome: 'Bishop',
  idade: 25,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 25,
};

const aluno3: PessoaProtocolo = {
  nome: 'Yelena',
  sobrenome: 'Belova',
  idade: 28,
};

console.log(aluno1, aluno2, aluno3);
