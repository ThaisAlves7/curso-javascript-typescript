//Função recursiva

function recursiva(max) {
  console.log(max);
  //Não deixa a recursividade ser maior que 10
  //Evita problemas com recursividades grandes (Limite max 2022 = 11292)
  if (max >= 11292) return;
  max++;
  recursiva(max);
}
recursiva(0);
