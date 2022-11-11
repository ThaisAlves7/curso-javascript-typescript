/* 
  Tags Expressões Regulares:
    g => global (encontra todos os ocorrências)
    i => insensitive (ignora letras maiúsculas e minusculas)
    () => grupo
    [] => conjunto
    [^] => negação {Dentro dos conjuntos NEGAÇÃO}
    | => ou
    ^ => começa com {Fora dos Conjuntos COMEÇA COM}
    $ => termina com
    [0-9] => Obter apenas números
    [a-zA-Z] => Obter apenas letras
  
  Quantificadores:
    * => (opcionais) 0 ou n
    + => (obrigatório) 1 ou n
    ? => (opcionais) 0 ou 1
    \ => Caracteres de escape
    {n, m} => Mínimo e Máximo
    {, 10} => no 0 a 10
    {5, 10} => de 5 a 10
    m => multiline

*/

const texto = `
joão trouxe flores para sua amada namorada em 10 de janeiro de 1970.
Maria era o nome dela

Foi um ano excelente na vida de João. Teve 5 filhos, todos adultos atualmente .
Maria, hoje sua esposa, ainda fez o aquele café com pão de queijo nas tardes de 
domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso
pão de queijo.
Não canso de ouvir a Maria:
"Joooooooooãooooo, o café ta prontinho. Veemmm!!
`;

const arquivos = [
  "Atencao.jpg",
  "FOTO.jpeg",
  "Meu gatinho.jpg",
  "Meu gatinho.JPG",
  "Meu gatinho.JPEG",
  "Meu gatinho.JPeeeEEEEeeeeeeeeeeeeeeeeeeG",
  "Marido.png",
  "lista de compras.txt",
];

const alfabeto =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ  abcdefghijklmnopqrstuvwxyz ®¡ 0123456789 ¡";

const html = "<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div</div>";
// const html2 = "<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div</div>";
const html2 = `<p
data-teste='teste'
class="teste teste">
  Olá mundo
</p> <p>Olá de novo</p> <div>Sou a div</div>`;

const cpf = `
  Os CPFs são:
    254.224.877-45 215.978.456-12 047.258.369-96


    963.987.321-00
`;

const ips = `

  Os Ips são:
    0.0.0.0

    192.168.0.25

        10.10.5.12

        10.01.10.20 (ESTE IP NÃO É VALIDO)
        10.021.08.20 (ESTE IP NÃO É VALIDO)

    255.255.255.255

`;

const cpf2 = `
254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00
`;

const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

module.exports = {
  texto,
  arquivos,
  alfabeto,
  html,
  html2,
  cpf,
  cpf2,
  ips,
  lookahead,
};
