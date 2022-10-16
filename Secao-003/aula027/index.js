/*
Operadores ternários:
(condoca) ? Valor para verdadeiro : Valor para falso
*/

// if (pontuacaoUsuario >= 1000) {
//   console.log("Usuário VIP");
// } else {
//   console.log("Usuário normal");
// }

const pontuacaoUsuario = 500;
const nivelUsuario =  pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuario Normal";

const corUsuario = 'Pink'
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)

