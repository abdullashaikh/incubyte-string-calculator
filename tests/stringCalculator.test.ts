import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator', () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test('single number returns that number', () => {
    expect(calc.add('1')).toBe(1);
  });

});
