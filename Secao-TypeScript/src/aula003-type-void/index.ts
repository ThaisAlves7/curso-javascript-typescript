function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Yelena',
  sobrenome: 'Belova',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Thais', 'Alves');
pessoa.exibirNome();

export { pessoa };
