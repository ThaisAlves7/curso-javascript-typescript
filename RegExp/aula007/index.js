const { cpf2 } = require("../base");

/* 
  ^     => Começa com
  $     => termina com
  [^]   => Negação
*/

const cpf = "254.224.877-45";
const cpfRegExp = /(\d{3}\.){2}\d{3}\-\d{2}/gm;

console.log(cpf2)
console.log(cpf2.match(cpfRegExp));
