
/*
Function countChar takes a string and a character as input and counts the number of occurrences of that character in the string.
Function countBs takes a string as input and counts the number of uppercase 'B' characters in it.
*/

function countChar(str,char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

function countBs(str) {
    return countChar(str, 'B');
}

const result1 = countBs("BBC");

console.log(result1);
