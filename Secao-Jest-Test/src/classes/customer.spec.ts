import { IndividualCustomer, EnterpriseCustomer } from './customer';

// sut => Pessoal Física
const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

// sut => Empresa
const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111-111-111-11');
    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Otávio');
    expect(sut).toHaveProperty('cpf', '111-111-111-11');
  });

  it('should have methods to get name and idn for individual customer', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111-111-111-11');
    expect(sut.getName()).toBe('Luiz Otávio');
    expect(sut.getIDN()).toBe('111-111-111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name, cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '111-111-111-11');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '111-111-111-11');
  });

  it('should have methods to get name and idn for enterprise customer', () => {
    const sut = createEnterpriseCustomer('Udemy', '111-111-111-11');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('111-111-111-11');
  });
});
