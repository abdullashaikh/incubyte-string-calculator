import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator', () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test('empty string returns 0', () => {
    expect(calc.add('')).toBe(0);
  });
});
