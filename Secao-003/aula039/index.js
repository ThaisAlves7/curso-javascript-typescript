// const nome = "Luiz";
// let i = 0;

// while (i <= nome.length) {
//   console.log(nome[i]);
//   i++;
// }

// console.log("Segue a vida....");

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
let i = 1;

// while (rand !== 10) {
//   rand = random(min, max);
//   console.log(`${i}° Tentativa - Número: ${rand} `);
//   i++;
// }

do {
  rand = random(min, max);
  console.log(`${i}° Tentativa - Número: ${rand} `);
  i++;
} while (rand !== 10);
