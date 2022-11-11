const { cpf, ips } = require("../base");

// CPF
const cpfEncontrados = cpf.match(/[0-9\.\-]+/g);
console.log(`Os CPF's encontrados foram: ${cpfEncontrados}`);
// Espaço
console.log();
// IP
const ipsEncontrados = ips.match(/([0-9]{1,3}\.?)+/g);
console.log(`Os IP's encontrados foram: ${ipsEncontrados}`);
console.log();
/* ==================================================================================================================================================
                      Resolução
*/

console.log("Resolução");
console.log();
// console.log(cpf.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g))
// console.log(cpf.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))
// console.log(cpf.match(/(\d{3}\.){2}\d{3}\-\d{2}/g))

const ipRegExp = /((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]\d|[0-9])(\.)){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]\d|[0-9])/g;

// for (let i = 0; i <= 300; i++) {
//   const ip = `${i}.${i}.${i}.${i}`;

//   console.log(ip, ip.match(ipRegExp));
// }

console.log(ips.match(ipRegExp))