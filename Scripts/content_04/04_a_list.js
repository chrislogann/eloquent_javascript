
/*
Function arrayToList builds a list data structure from an array.
Function listToArray builds an array from a list data structure.
Prepend takes an element and a list and creates a new list that adds the element to the front of the input list.
Function nth takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
Function nth recursive version is similar to the previous one, but it uses recursion to find the element at the given position.
*/

function arrayToList(array) {
  let list = null;
  // We iterate backwards to nest the objects correctly
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

console.log("Testing arrayToList:");
let list = arrayToList([10, 20]);
console.log(list);
console.log("------------------------------");

function listToArray(list) {
  let array = [];
  // Notice the loop structure: node = node.rest moves us forward
  for (let node = list; node !== null; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

console.log("Testing listToArray:");
console.log(listToArray(list));
console.log("------------------------------");


function prepend(value, list) {
  return { value, rest: list };
}

console.log("Testing prepend:");
list = prepend(100,list)
console.log(list);
console.log("------------------------------");

function nth(list, n) {
  if (!list) return undefined;
  let count = 0;
  for (let node = list; node !== null; node = node.rest) {
    if (count === n) return node.value;
    count++;
  }
  return undefined;
}

console.log("Testing nth:");
console.log(nth(list, 0));
console.log("------------------------------");

function nthRecursive(list, n) {
  // Base Case 1: The index is out of bounds (list is empty)
  if (!list) return undefined;
  
  // Base Case 2: We found the target index
  if (n === 0) return list.value;
  
  // Recursive Step: Look at the next item and decrement n
  return nthRecursive(list.rest, n - 1);
}

console.log("Testing nthRecursive:");
console.log(nthRecursive(list, 0));
console.log(nthRecursive(list, 1));
console.log(nthRecursive(list, 2));
console.log("------------------------------");


