import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator', () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test('negative numbers throw an exception', () => {
    expect(() => calc.add('1,-2,3,-4')).toThrow('negative numbers not allowed -2,-4');
  });

});
