describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    // expect(number).toBeCloseTo(10.1, 1);
    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
    // expect(number).toHaveProperty('toString1');
  });

  it('should split test', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    // expect(number).toBeCloseTo(10.1, 1);
    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
    // expect(number).toHaveProperty('toString1');
  });
});

describe('Object', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Luiz', age: 30 };
    const anotherPerson = { ...person };

    // expect(person).toBe(anotherPerson); // Falha
    expect(person).toEqual(anotherPerson); // Sucesso
    expect(person).toHaveProperty('age');
    // expect(person).toHaveProperty('lastName'); // Falha
    // expect(person).toHaveProperty('age', 31); // Falha
    expect(person).toHaveProperty('age', 30); // Sucesso

    expect(person.name).toBe('Luiz');
  });
});
