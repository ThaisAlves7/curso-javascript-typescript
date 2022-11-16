// Record
const objeto1: Record<string, string | number> = {
  nome: 'Harry',
  sobrenome: 'Style',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required => Transforma tudo que é opcional em obrigatório
type PessoaRequired = Required<PessoaProtocol>;

// Partial => Transforma tudo que é requerido(obrigatório) em opcional
type PessoaPartial = Partial<PessoaRequired>;

//Readonly => Não permite alterações
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick => Permite que você escolha as coisas dentro do Objeto que você quer usar
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaPartial = {
  nome: 'Harry',
  sobrenome: 'Style',
  idade: 30,
};
console.log(objeto2);

/*
Extract => Mostra itens QUE PODEM SER ATRIBUÍDOS comparando 2 itens (Sem repetir)
Exclude => Mostra itens QUE PODEM SER EXCLUÍDOS comparando 2 itens (Remove aquilo que é igual entre ambos)
*/
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

// type AccountApi = {
//   id: string;
//   name: string;
//   age: number;
// };

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asdaudh2ueda8dachuscis8df',
  name: 'Luiz',
  age: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// Module mode
export default 1;
