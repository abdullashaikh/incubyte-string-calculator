export class StringCalculator {
    add(numbers: string): number {
      if (!numbers) return 0;
  
      // Check for custom delimiter at start: //DELIM\n...
      let delimiters: string[] = [',', '\n'];
      let numsSection = numbers;
  
      const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (customDelimiterMatch) {
        const delimSpec = customDelimiterMatch[1];
        // Support single-char or bracketed multi-char delimiters: //[***]\n or //;\n
        const alternateMatches = Array.from(delimSpec.matchAll(/\[([^\]]+)\]/g)).map(m => m[1]);
        if (alternateMatches.length > 0) {
          delimiters = delimiters.concat(alternateMatches);
        } else {
          delimiters.push(delimSpec);
        }
        numsSection = numbers.slice(customDelimiterMatch[0].length);
      }
  
      // Build regex to split by any delimiter (escape special regex chars)
      const escaped = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(delimiters.map(escaped).join('|'), 'g');
  
      if (numsSection.trim() === '') return 0;
  
      const tokens = numsSection.split(pattern).filter(t => t !== '');
  
      const ints: number[] = tokens.map(t => {
        const n = Number(t);
        if (Number.isNaN(n)) {
          throw new Error(`invalid number: ${t}`);
        }
        return n;
      });
  
      const negatives = ints.filter(n => n < 0);
      if (negatives.length > 0) {
        // Match requested format: "negative numbers not allowed <negative_number(s)>"
        // We'll join without spaces: -1,-2 to match spec style.
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
      }
  
      // Sum and return (no further rules like ignoring >1000 unless requested)
      return ints.reduce((s, x) => s + x, 0);
    }
  }
  