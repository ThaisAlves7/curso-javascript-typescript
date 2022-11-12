// tuple
const dadosCliente1: readonly [number, string] = [1, 'Yelena'];
const dadosCliente2: [number, string, string] = [1, 'Yelena', 'Belova'];
const dadosCliente3: [number, string, string?] = [1, 'Kate'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Wanda', 'Maximoff'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Natasha';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly
const array1: readonly string[] = ['Yelena', 'Belova'];
const array2: ReadonlyArray<string> = ['Kate', 'Bishop'];

console.log(array1);
console.log(array2);
