// Escreva uma função que recebe 2 números e retorne o maior deles

// function maiorMenor(n1, n2) {
//   const max = Math.max(n1, n2);
//   const min = Math.min(n1, n2);
//   return `O maior número é ${max} e o menor número é ${min}`;
// }

// function maiorMenor(x, y) {
//   // if (x > y) return x;
//   // return y;

//   return x > y ? x : y;
// }

// const maiorMenor = (x, y) => {
//   return x > y ? x : y;
// };

const maiorMenor = (x, y) => (x > y ? x : y);

console.log(maiorMenor(5, 10));
