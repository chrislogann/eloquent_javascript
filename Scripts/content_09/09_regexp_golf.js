/*
Regexp Gold seeks to match a series of patterns with the shortest possible regular expression. The patterns are:
1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e (or E)
*/

// Pattern 1: car and cat
console.log(/ca[rt]/.test("car"));
console.log(/ca[rt]/.test("cat"));

// Pattern 2: pop and prop
console.log(/po[ps]/.test("pop"));
console.log(/po[ps]/.test("prop"));

// Pattern 3: ferret, ferry, and ferrari
console.log(/ferr(et|y|ari)/.test("ferret"));
console.log(/ferr(et|y|ari)/.test("ferry"));
console.log(/ferr(et|y|ari)/.test("ferrari"));

// Pattern 4: Any word ending in ious
console.log(/\b\w+ious\b/.test("delicious"));
console.log(/\b\w+ious\b/.test("curious"));

// Pattern 5: A whitespace character followed by a period, comma, colon, or semicolon
console.log(/\s[.,:;]/.test(" a"));
console.log(/\s[.,:;]/.test(" b"));
console.log(/\s[.,:;]/.test(" c"));
console.log(/\s[.,:;]/.test(" d"));

// Pattern 6: A word longer than six letters
console.log(/\b\w{7,}\b/.test("elephant"));
console.log(/\b\w{7,}\b/.test("giraffe"));

// Pattern 7: A word without the letter e (or E)
console.log(/\b[^e]+\b/.test("fly"));
console.log(/\b[^e]+\b/.test("green"));