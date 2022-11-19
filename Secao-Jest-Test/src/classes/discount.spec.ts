import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  // Limpar os testes a cada finalização de teste
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    // System under teste => sut
    const sut = createSut(NoDiscount);
    // toBe => Para testes de valores exatos
    // expect(sut.calculate(10.99)).toBe(10.99);w
    // toBeCloseTo => Para valores que podem ser arrendondados
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
