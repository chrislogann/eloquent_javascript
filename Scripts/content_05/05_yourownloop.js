
/*
 Function loop takes a value, a test function, an update function, and a body function as input.
 It uses a for loop to repeatedly execute the body function as long as the test function returns true.
 The update function is called after each iteration to modify the value for the next iteration.
*/

function loop(value, test, update, body) {
    for (let current = value; test(current); current = update(current)) {
        body(current);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

