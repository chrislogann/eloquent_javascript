
/*
Class Group represents a distinct array of values.
Constructor creates an empty group.
Method add includes a value in the group (but only if it is not already a member).
Method delete removes its argument from the group (if it was a member).
Method has returns a Boolean value indicating whether the argument is a member of the group.
Method from takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

class Group {

    constructor() {
        this.members = [];
    }

    add(value) {
    if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(member => member !== value);
    }

    has(value) {
        return this.members.includes(value);
    }

    static from(iterable) {
        const group = new Group();
        
        for (const value of iterable) {
            group.add(value);
        }

        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
    
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0; // Keep track of where we are
  }

  next() {
    // If we've gone past the last element
    if (this.position >= this.group.members.length) {
      return { done: true };
    }

    // Otherwise, give the current value and move the pointer forward
    let result = {
      value: this.group.members[this.position],
      done: false
    };
    
    this.position++;
    return result;
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

