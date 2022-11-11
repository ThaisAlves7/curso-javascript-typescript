const { texto } = require("../base");
const regExp = /João|Maria/gi;

// console.log(texto.match(regExp));
// console.log(texto.replace('João', 'Felipe'));
// console.log(texto.replace(/João/gi, "Felipe"));

console.log(
  texto.replace(/(João|Maria)/gi, function (input) {
    return "################" + input.toUpperCase() + "######################";
  })
);
