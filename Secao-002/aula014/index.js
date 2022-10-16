//IEEE 754 - 2008 padrão seguido pela Javascript para números

let num1 = 0.7; //number
let num2 = 0.1; //number

// console.log(num1.toString() + num2)

//caso queira trocar de forma permanente
// num1 = num1.toString()
// console.log(typeof num1)

//converte numero para binário
// console.log(num1.toString(2))

//Arrendamento para cima para 2 casos decimais caso queira alterar é só substituir o 2
// console.log(num1.toFixed(2));

//Verifica se o numero é um numero inteiro ou de ponto flutuante (Float)
// console.log(Number.isInteger(num1));

//Retorna true caso a conta seja invalida (NaN)
// let temp = num1 * 'Ola'
// console.log(Number.isNaN(temp));

console.log(num1 + num2);

//Javascript tem certa imprecisão cálculos
num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0

console.log(num1);

// num1 = num1.toFixed(2);
num1 = Number(num1.toFixed(2));
console.log(Number.isInteger(num1));


console.log(num1);
