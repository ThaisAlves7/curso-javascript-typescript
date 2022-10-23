const pessoas = [
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Luiz" },
  { id: 1, nome: "Helena" },
];

//"Erro"
// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

//Manter a estrutura e id correspondente independe da posição
const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

// for (const [identifier, {id, nome}] of novasPessoas){
//   console.log(identifier, id, nome)
// }


// for (const pessoas of novasPessoas.values()){
//   console.log(pessoas)
// }

novasPessoas.delete(2)
console.log(novasPessoas);


// console.log(novasPessoas.get(2));
