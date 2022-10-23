//Método Splice
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

//nomes.splice(índice, delete, elem1, elem2, elem3)

//Remover começando do Índice 4 apenas 1 elemento
//Remover começando do Índice 3 apenas 2 elemento
//Remover começando do Índice -1 apenas 1 elemento
//Remover começando do Índice -2 apenas 2 elemento
//Remover começando do Índice -2 apenas 2 elemento
// const removidos = nomes.splice(-2, Number.MAX_VALUE)
// console.log(Number.MAX_VALUE)
// const removidos = nomes.splice(-2, 0)
// console.log(nomes, removidos)

//Adicionar elemento no índice selecionado
// const adicionado = nomes.splice(3, 0, 'Luiz')
// console.log(nomes, adicionado)

//Remover um elemento e índice selecionado
//Remover 2 elemento e índice selecionado
// const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio')
// console.log(nomes, removidos)

//Simulando pop
// const removidos = nomes.splice(-1, 1)
// console.log(nomes, removidos)

//Simulando shift
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

//Simulando push
// nomes.splice(nomes.length, 0, 'Luiz');
// console.log(nomes);

//Simulando unshift
nomes.splice(0, 0, 'Luiz');
console.log(nomes);
