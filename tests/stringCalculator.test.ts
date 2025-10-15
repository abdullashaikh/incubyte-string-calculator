import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator', () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test('handle newlines between numbers', () => {
    expect(calc.add('1\n2,3')).toBe(6);
  });
});
