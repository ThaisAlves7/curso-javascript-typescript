/*

Operadores Lógicos:
  &&  => AND => E  => Todas as expressões devem ser True para true
  ||  => OR  => U  => Todas as expressões devem ser False para false

  false => Literalmente false:
    0
    '' "" ``
    null/ undefined
    NaN
  FALSY => Avalia em falso quando necessário
*/

//Ao não encontrar false ele retorna o ultimo valor encontrado
// console.log('Luiz Otávio' && 0 && 'Maria');
// console.log('Luiz Otávio' && true && 'Maria');
// console.log('Luiz Otávio' && true && NaN);

// function falaOi() {
//   return "Oi";
// }

// let vaiExecutar = 'Joãozinho';

// console.log(vaiExecutar && falaOi());

// const corUsuario = 'vermelho'
// const corPadrao = corUsuario || 'preto'

// console.log(corPadrao)

const a = 0;
const b = null;
const c = "false"; //Aqui => é isso que é exibido
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
