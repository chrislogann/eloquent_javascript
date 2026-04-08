
/*
Function range takes start and end parameters, returning an array containing all the numbers from start to end.
It also includes a step parameter to specify the increment between numbers in the range. If step is not provided, it defaults to 1.
Function sum gathers the sum of an array of numbers.
*/

function range(start, end, step = 1) {

    let array = [];

    for (let i = start; i <= end; i += step) {
        array.push(i);
    }

    return array;
}

function sum(array) {

    let total = 0;

    for (let number of array) {
        total += number;
    }

    return total;
}

const number_array = range(1, 10, 1);
console.log(number_array);

const total_sum = sum(number_array);
console.log(total_sum);

