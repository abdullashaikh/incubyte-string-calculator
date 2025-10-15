export class StringCalculator {
    add(numbers: string): number {
      if (numbers === '') return 0;
  
      const nums = numbers.split(/[\n,]/).map(n => Number(n));
      return nums.reduce((a, b) => a + b, 0);
    }
  }
  