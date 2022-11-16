type ObterChaveFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const obterChave: ObterChaveFn = (object, key) => object[key];

const animal = {
  cor: 'Preto',
  vacinas: ['Vacina 1', 'Vacina 2'],
  raca: 'Pantera',
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'raca'));
