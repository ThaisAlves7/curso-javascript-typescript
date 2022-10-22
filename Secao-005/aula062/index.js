// const nomes = new Array ("Eduardo", "Maria", "Joana"); // Outra forma de criar Array
// const nomes = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];
// console.log(`Lista Original: ${nomes}`);

//Substituir nome por posição dentro Array
// nomes[2] = "João";
// console.log(nomes);

//Remover item da posição sem alterar posições
// delete nomes[2];
// console.log(nomes);

//Valor por referências => Possuem mesmo endereço de memoria
// const novo = nomes
// console.log(`Copia por Referência: ${novo}`);
// console.log(`Lista Original: ${nomes}`);

// //Remover o ultimo item de 1 lista remove da outra automaticamente
// novo.pop()
// console.log(`Cópia por Referência: ${novo}`);
// console.log(`Lista Original: ${nomes}`);

//Copiar todos os outros elementos => Possuem endereços diferentes (Literalmente apenas copia)
// const novo = [...nomes]
// novo.pop()
// console.log(`Lista Original: ${nomes}`);
// console.log(`Cópia dos Elementos: ${novo}`);

//Obter tamanho do Array
// console.log(nomes.length)

//Remover elementos
// const removido = nomes.pop()
// console.log(nomes, removido)

//Remove o primeiro valor do Array ajustando o indices do Array novamente
// const removido = nomes.shift()
// console.log(nomes, removido)

//Adicionar itens ao final do Array
// nomes.push('João')
// nomes.push('Taylor')
// console.log(nomes)

//Adicionar itens no inicio do Array
// nomes.unshift('João')
// nomes.unshift('Taylor')
// console.log(nomes)

//Fatiamento de Array
// const novo = nomes.slice(1, -1)
// console.log(novo)

// //Converter String em Array
// const nome = "Luiz Otávio Miranda";
// const nomes2 = nome.split(' ')
// console.log(nomes2);


//Converter Array em String
// const nome = [ 'Luiz', 'Otávio', 'Miranda' ];
// const nomes2 = nome.join(' ')
// console.log(nomes2);
