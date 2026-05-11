/*
09_quoting_style.js replaces all single quotes with double quotes in a given string. It also replaces double quotes with single quotes.
Ignores single quote contractions.
*/

function quote_style(str, quote_to_replace, quote_to_replace_with) {
    const pattern = `(?<=\W|^)([${quote_to_replace}])`;
    // Create a regular expression to match the quote to replace
    const regex = new RegExp(pattern, 'g');
    // Replace all occurrences of the quote with the replacement quote
    return str.replace(regex, quote_to_replace_with);
}

// Test cases
console.log(quote_style("She said, 'Hello! Don't tap the glass.'", "'", '"'));
console.log(quote_style("He replied, \"Hi there! Don't tap the glass.\"", '"', "'"));

