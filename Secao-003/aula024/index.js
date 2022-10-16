/*
Entre 0 - 11    => Bom dia
Entre 12 - 17   => Bom dia
Entre 18 - 23   => Bom dia
*/

// If pode ser usando sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else-if nas checagem
// So posso ter um else na checagem
// Podemos usar condições sem if else, utilizando apenas if e else

// const hora = 50;

// if (hora >= 0 && hora <= 12) {
//   console.log("Bom dia");
// } else if (hora >= 12 && hora <= 17) {
//   console.log("Boa tarde");
// } else if (hora >= 18 && hora <= 23) {
//   console.log("Boa noite");
// }else{
//   console.log('Olá')
// }

const tenhoGrana = false;

if (tenhoGrana) {
  console.log("Vou sair de casa");
} else {
  console.log("Não vou sair de casa");
}
