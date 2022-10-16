/*

Operadores de Comparação:
  >     => maior que
  >=    => maior que OU igual a 
  <     => menor que 
  <=    => menor que OU igual a 

  ==    => igualdade (valor) //Não recomendado o uso
  ===   => igualdade estrita (valor e tipo)

  !=    => diferente (valor) //Não recomendado o uso
  !==   => diferente estrito (valor e tipo)

*/

const num1 = 10;   //number
const num2 = 10;   //number

//Ele converte internamente o tipo da variável
// const num2 = '10'; //string
// const comp = num1 == num2;
// console.log(comp);

// const num2 = '10'; //string
// const comp = num1 != num2;
// console.log(comp);

const comp = num1 !== num2;
console.log(comp)