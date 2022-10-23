/*
Javascript é baseado em protótipos para passar propriedade e métodos
de um objeto para outro

Definição de protótipo
Protótipo é o termo usado para ser referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para 
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o moto
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipo é usada até o topo (null) até encontrar (ou não) tal membro.
*/

//Construtora => molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => "ORIGINAL: " + this.nome + " " + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

//Instância
const pessoa1 = new Pessoa("Luiz", "O."); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa("Maria", "A."); // <- Pessoa = Função Construtora
const data = new Date(); // <- Date = Função Construtora

console.dir(pessoa1);
console.dir(data);
