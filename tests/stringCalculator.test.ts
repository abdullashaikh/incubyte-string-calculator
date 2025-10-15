import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator', () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test('two numbers, comma separated, returns sum', () => {
    expect(calc.add('1,5')).toBe(6);
  });
  test('handle unknown amount of numbers', () => {
    expect(calc.add('1,2,3,4,5')).toBe(15);
  });
});
