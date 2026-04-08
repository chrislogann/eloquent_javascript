
/*
Function deepEqual compares two object parameters and returns true if properties match.
If both parameters are objects, a recursive approach is used to compare the values of properties.
*/

// AI Assisted with Google Gemini
function deepEqual(a, b) {

  // 1. Direct equality check (covers primitives and same-reference objects)
  if (a === b) return true;

  // 2. Check if either is not an object or is null
  // (Since we already checked a === b, if one is null/not-object, they aren't equal)
  if (a == null || typeof a != "object" || 
      b == null || typeof b != "object") {
    return false;
  }

  // 3. Compare the number of properties
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  // 4. Recursive check for every key in 'a'
  for (let key of keysA) {
    // Check if the key exists in 'b' and if its value is deeply equal
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

let a = {name: "catbug", species: "cat", age: 5};
let b = {name: "catbug", species: "cat", age: 5};

console.log("Testing deepEqual:");
console.log(deepEqual(a, b));
console.log("------------------------------");