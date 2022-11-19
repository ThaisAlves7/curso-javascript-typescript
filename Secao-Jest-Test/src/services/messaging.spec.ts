import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  // Limpar os testes a cada finalização de teste
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System under teste => sut
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log with "Mensagem enviada:" and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
