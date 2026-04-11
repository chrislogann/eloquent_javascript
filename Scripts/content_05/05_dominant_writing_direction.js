
/*
Function dominantWritingDirection takes an array of strings and returns the dominant writing direction.
Each script object has a direction property that indicates the writing direction (e.g., "ltr" for left-to-right, "rtl" for right-to-left, "ttb" for top-to-bottom).
The function counts the occurrences of each writing direction in the input array and returns the one that appears most frequently.
*/

const SCRIPTS = require('./05_scripts.js');

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
        })) {
            return script;
        }
    }

    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.find(c => c.name == name);
        if (!known) {
            counts.push({name, count: 1});
        } 
        else {
            known.count++;
        }
    }

    return counts;
}

function dominantWritingDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;

}

console.log(`Dominate writing direction: ${dominantWritingDirection('مرحبًا,a,ꡖꡟꡃꡖꡟꡃꡖꡟꡃꡖꡟꡃ')}`);
