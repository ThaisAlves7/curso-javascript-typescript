const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'Outro Valor';
objetoA.chaveC = 'Nova Chave';
objetoA.chaveD = 'Chave C';
