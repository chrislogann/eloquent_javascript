
/*
Utilizes thew reduce method and concat method to flatten an array of arrays into a single array.
*/

let array_of_arrays = [[1, 2, 3], [4, 5], [6]];

const flattened_array = array_of_arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
});

console.log(flattened_array); // Output: [1, 2, 3, 4, 5, 6]


