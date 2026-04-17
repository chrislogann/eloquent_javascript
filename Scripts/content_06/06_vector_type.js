
/*
Class Vec represents a vector in two-dimensional space.
It takes x and y parameters (numbers), which it saves to properties of the same name.
Class method plus and minus take a vector parameter and returns a new vector that has the sum or difference of the x and y values of the two vectors.
The length property computes the length of the vector, which is the distance of the point (x, y) from the origin (0, 0).
*/

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.hypot(this.x, this.y);
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

}

let vec = new Vec(1, 2);
console.log(vec.plus(new Vec(2, 3)));
console.log(vec.minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
console.log(Vec.prototype)