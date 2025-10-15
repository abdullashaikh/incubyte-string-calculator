import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator (TDD kata)', () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test('empty string returns 0', () => {
    expect(calc.add('')).toBe(0);
  });

  test('single number returns that number', () => {
    expect(calc.add('1')).toBe(1);
    expect(calc.add('42')).toBe(42);
  });

  test('two numbers, comma separated, returns sum', () => {
    expect(calc.add('1,5')).toBe(6);
    expect(calc.add('10,20')).toBe(30);
  });

  test('handle unknown amount of numbers', () => {
    expect(calc.add('1,2,3,4,5')).toBe(15);
  });

  test('handle newlines between numbers (instead of commas)', () => {
    expect(calc.add('1\n2,3')).toBe(6);
    expect(calc.add('4\n5\n6')).toBe(15);
  });

  test('support custom single-char delimiter "//;\\n1;2" => 3', () => {
    expect(calc.add('//;\n1;2')).toBe(3);
  });

  test('support custom multi-char delimiter in square brackets', () => {
    expect(calc.add('//[***]\n1***2***3')).toBe(6);
  });

  test('support multiple custom delimiters', () => {
    expect(calc.add('//[*][%]\n1*2%3')).toBe(6);
    expect(calc.add('//[**][%%%]\n1**2%%%3')).toBe(6);
  });

  test('negative numbers throw an exception with all negatives listed', () => {
    expect(() => calc.add('1,-2,3,-4')).toThrowError('negative numbers not allowed -2,-4');
  });

  test('ignores empty tokens and treats them as absent', () => {
    // "1,,2" should be treated as 1 and 2 (our implementation filters empty tokens)
    expect(calc.add('1,,2')).toBe(3);
  });

  test('invalid numeric token throws descriptive error', () => {
    expect(() => calc.add('1,foo')).toThrowError('invalid number: foo');
  });
});
