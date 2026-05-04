/*
Function primitiveMultiply multiplies two numnbers.
It mulitiples 20% of the time, but throws an exception 80% of the time.
Write a function that wraps this behavior and keeps trying until a call succeeds, returning the result.
*/

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      return reliableMultiply(a, b);
    }
}

console.log(reliableMultiply(8, 8));
// → 64
