const { texto } = require("../base");

// const regExp = /João/gi;
// const regExp = /Teve 5 filhos/i;

const regExp = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}

// console.log(regExp.test(texto));
// console.log(regExp.exec(texto));
