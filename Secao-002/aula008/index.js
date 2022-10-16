// Formula do IMC (altura * altura) / peso

const nome = "Thais Alves";
const sobrenome = " Pereira";
const idade = 28;
const peso = 86;
const alturaEmM = 1.76;

let imc;
let anoNascimento;

//Concatenação de nome e sobrenome em uma única variável
const nomeCompleto = nome + sobrenome;

//Cálculo do IMC
imc = peso / (alturaEmM * alturaEmM);

//Obter o ano de nascimento da pessoa pela idade dela
anoNascimento = 2022 - idade;

//Template Strings
console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso}Kg 
tem ${alturaEmM} de altura e seu IMC é de ${imc}
${nome} nasceu em ${anoNascimento}`);

// console.log(nomeCompleto, "tem", idade, "anos, pesa", peso, "Kg");
// console.log("tem", alturaEmM, "de altura e seu IMC é de", imc);
// console.log(nome, 'nasceu em', anoNascimento);
