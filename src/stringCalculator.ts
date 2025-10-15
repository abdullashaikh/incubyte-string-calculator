export class StringCalculator {
    add(numbers: string): number {
      if (numbers === '') return 0;
  
      let delimiter = /[\n,]/;
      let numsPart = numbers;
  
      if (numbers.startsWith('//')) {
        const match = numbers.match(/^\/\/(.+)\n/);
        if (match) {
          delimiter = new RegExp(match[1]);
          numsPart = numbers.slice(match[0].length);
        }
      }
  
      const nums = numsPart.split(delimiter).map(n => Number(n));
  
      const negatives = nums.filter(n => n < 0);
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
      }
  
      return nums.reduce((a, b) => a + b, 0);
    }
  }
  