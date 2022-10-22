/*
  Escreva uma função que recebe um numero e retorne o seguinte:
    ° Número Divisível por 3 = Fizz;
    ° Numero Divisível por 5 = Buzz;
    ° Numero Divisível por 3 e 5 = FizzBuzz;
    ° Numero NÃO é Divisível por 3 e 5 = Retorna o próprio numero;
    ° Checar se o número é realmente um número = Retorna o próprio numero;
    ° Use a função com número de 0 a 100;
*/

function fizzBuzz(number) {
  if (typeof number !== "number") return number;

  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";

  return number;
}

console.log('a', fizzBuzz('a'));
for (let i = 0; i < 100; i++) {
  console.log(i, fizzBuzz(i));
}
