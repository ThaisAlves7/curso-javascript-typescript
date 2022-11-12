// eslint-disable-next-line
let x = 10;
x = 0b1010;

const y = 10;

// eslint-disable-next-line
const a = 100;

const pessoa = {
  nome: 'Natasha' as const,
  sobrenome: 'Romanoff',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul'));

// Module mode
export default 1;
