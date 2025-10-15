import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator', () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test('support custom single-char delimiter', () => {
    expect(calc.add('//;\n1;2')).toBe(3);
  });
});
