import { MyReverseIterator } from './my-reverse-iterator';
import { MyDataStructure } from './my-data-structure';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;

console.log('ROUBADOS: ', a, b);
console.log('EXECUTEI VÁRIAS COISAS E DEPOIS USEI O ITERATOR');
const [c, ...rest] = dataStructure;
console.log(c, rest);

console.log();

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

// console.log('Não tenho mais valores');
for (const data of dataStructure) {
  console.log(data);
}
console.log();

console.log('AQUI PRECISO ZERAR O ITERATOR');
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
