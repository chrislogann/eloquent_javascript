
/*
Function reverseArray intakes a an array parameter and returns a new reversed array. Pure function, does not modify the original array.
Function reverseArrayInPlace intakes an array parameter and reverses the original array. Side effect function, modifies the original array.
*/


function reverseArray(array) {

    let reversed_array = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversed_array.push(array[i]);
    }

    return reversed_array;
}

let array = [1, 2, 3, 4, 5];
let reversed_array = reverseArray(array);
console.log("Pure function, does not modify the original array");
console.log(reversed_array);
console.log(array);
console.log("--------------------------------------------------");

function reverseArrayInPlace(array_in_place) {
    let left = 0;
    let right = array_in_place.length - 1;

    while (left < right) {
        [array_in_place[left], array_in_place[right]] = [array_in_place[right], array_in_place[left]];
        left++;
        right--;
    }

}

console.log("Side effect function, modifies the original array");
let array_in_place = [1, 2, 3, 4, 5];
console.log(array_in_place);
reverseArrayInPlace(array_in_place);
console.log(array_in_place);


