/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescription(o, 'prop')
...spread

//Já vimos
Object.key(retorna chaves)
Object.freeze(congela objeto)
Object.defineProperties(define varias propriedades)
Object.defineProperty(define uma propriedade)
*/

//Valor por Referencia => Apontando para o mesmo endereço
// const produto = {nome: 'Caneca', preco: 1.8}
// const outraCoisa = produto

//Copia dos valores sem referencia
// const produto = {nome: 'Caneca', preco: 1.8}
// // const outraCoisa = {...produto, material: 'eletrônico'}
// const outraCoisa = Object.assign({}, produto, {material: 'porcelana'})

//Verificar as chaves do Produto
// console.log(Object.keys(produto))

//Congelar Objeto => Impossibilita a alteração do Objeto
// Object.freeze(produto)

//Mostra as configurações do daquele objeto (defineProperty)
// const produto = { nome: "Produto", preco: 1.8 };
// Object.defineProperty(produto, "nome", {
//   writable: false,
//   configurable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
// produto.nome = 'Outra coisa'
// console.log(produto)

//Ler apenas valores do objeto
// const produto = { nome: "Produto", preco: 1.8 };
// console.log(Object.values(produto))

//Obter valores e chaves do objeto
const produto = { nome: "Produto", preco: 1.8, material: "porcelana" };
// console.log(Object.entries(produto))

// for (let entry of Object.entries(produto)) {
//   console.log(entry);
// }

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
