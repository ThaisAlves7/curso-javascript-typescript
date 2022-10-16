//                0         1       2
const alunos = ["Luiz", "Maria", "João"];





console.log(alunos);


//Modo de saber se elemento é um Array => Retorna um boolean
// console.log(alunos instanceof Array);

//Tipo não retorna Array retorna um object
// console.log(typeof alunos);

//Mesmo fatiamento usado em String mais por índice dentro do Array
// alunos.push("Luíza");
// alunos.push("Chrigor");
// console.log(alunos.slice(0, -2));

//Voce consegue acessar valores que não existe resultado undefined
// console.log(alunos[50]);

//Deleta o valor mais não altera a posição do índice deixando undefined no lugar
// delete alunos[1]

//Remove o ultimo item da lista/ Você consegue salvar o valor removido
// alunos.pop()
// const removido = alunos.pop()
// console.log(removido);

//Adiciona no começo da lista
// alunos.unshift("Fábio");
// alunos.unshift("Beatriz");

// Adiciona no Fim com a função de lista
// alunos.push("Beatriz");
// alunos.push("Fábio");
// alunos.push("Luíza");
// alunos.push("Otávio");

//Adiciona no fim manualmente
// alunos[alunos.length] = "Luíza";
// alunos[alunos.length] = "Beatriz";
// alunos[alunos.length] = "Fábio";
// alunos[alunos.length] = "Luana";

//Substitui os valores
// alunos[0] = "Eduardo";
// alunos[3] = "Beatriz";
// console.log(alunos[0]);
// console.log(alunos[2]);
