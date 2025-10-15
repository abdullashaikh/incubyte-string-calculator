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
      return nums.reduce((a, b) => a + b, 0);
    }
  }
  