// realizar o arrendondamento para baixo e também inserir "0" a frente dos valores
const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0');

export { zeroLeft };
