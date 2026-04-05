
/*
Recursive function isEven take a positive whole number parameter and returns a boolean value.
If parameter is not a positive integer, then return a string "Input must be a positive whole number".
*/

//TODO: write a recursive function isEven
//TODO: if remainder is 0 return true
//TODO: if remainder is 1 return false

function isEven(n) {
    
    let remainder = n%2;
    if (remainder === 0) {
        return true;
    }

    if (remainder === 1) {
        return false;
    }

    return "Input must be a positive whole number";

}

const result = isEven(1.1);
console.log(result);
