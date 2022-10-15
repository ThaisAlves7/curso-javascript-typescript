//Exercício de logica com variáveis

let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

console.log("Original", varA, varB, varC);

const varAux = varA;
varA = varB;
varB = varC;
varC = varAux;

//Outro jeito de ser realizado - Mostrado pelo professor
// [varA, varB, varC] = [varB, varC, varA]

console.log("Alterado", varA, varB, varC);
