/* 
Primitivos (imutáveis): string, number, boolean, undefined, 
                        null (bigint, symbol) - Valores são copiados
Referência (mutável): array, object, function - Passado por referência
*/

// let nome = "Luiz";
// // nome = "Otávio";
// nome[0] = 'R'
// console.log(nome[0], nome);

// let a = "A";
// let b = a; //Cópia
// console.log(a, b);

// a = 'Outra coisa'
// console.log(a, b);

// let a = [1, 2, 3];

// //Isso é uma cópia
// let b = [...a];

// //Eles verificam o mesmo endereço na memória (NÃO É CÓPIA).
// let c = b;
// console.log(a, b), c;

// a.push(4);
// console.log(a, b, c);

// b.pop();
// console.log(a, b, c);

// b.unshift(99);
// console.log(a, b, c);

const a = {
  nome: "Luiz",
  sobrenome: "Otávio",
};

// const b = a
const b = { ...a };
a.nome = "João";

console.log(a, b);
