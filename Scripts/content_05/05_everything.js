
/*
Function every checks all array elements against a predicate function and returns true if all elements satisfy the condition, otherwise returns false.'
Function some checks if at least one element in the array satisfies the condition defined by the predicate function and returns true if it does, otherwise returns false.
*/

function every(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) {
            return false;
        }
    }
    return true;
}

const result = every([1, 3, 5], n => n < 10);
console.log(result); // Output: true

function some(array, predicate) {
    for (let element of array) {
        if (predicate(element)) {
            return true;
        }
    }
    return false;
}

const result2 = some([1, 3, 5], n => n > 4);
console.log(result2); // Output: true

