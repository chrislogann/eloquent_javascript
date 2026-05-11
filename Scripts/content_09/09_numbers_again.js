/*
 09_numbers_again.js matches javascript numbers in a string. It should match both integers and floating-point numbers, including those in scientific notation.
*/

function is_javascript_number(input) {
  const regex = /^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i;
  return input.map(item => regex.test(item))
}

const test_string = [42,-3.14,+0.001,1e10,"not a number"];
let isJavascriptNumber = is_javascript_number(test_string);
console.log(isJavascriptNumber); // Should return true, as it contains valid JavaScript numbers.