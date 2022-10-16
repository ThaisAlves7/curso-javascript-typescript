const nome = "João";
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 1.5
resultadoTriplicado = resultadoTriplicado + 5
console.log(resultadoTriplicado);

console.log(typeof(resultadoTriplicado))

/*  
Regras para criação de Constantes:

° Você não pode criar constantes com palavras reservadas da linguagem
   let, if, console, etc

° constantes precisam ter nomes significativos
    nomeCliente, nomeProduto, nomeEmpresa

° Nomes não podem começar com número

° Nomes não podem conter espaços ou traços
    nome Cliente, nome-Cliente

° Em JavaScript utilizamos camelCase
  nomeCompleto, luzAcesa, tipoProduto, nomeCompletoDoCliente

° JavaScript é Case-sensitive maiúsculas e minusculas são diferentes

° Não podemos modificar o valor de uma constantes

° Constante deve ser criada e inicializada ao mesmo tempo já que seu valor não pode ser alterado

° NÃO UTILIZE VAR, UTILIZE CONST
*/
