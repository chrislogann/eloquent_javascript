
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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));

