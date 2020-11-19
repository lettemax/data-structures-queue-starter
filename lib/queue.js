// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }


}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.front = newNode;
            this.back = newNode;
        } else {
            let currBack = this.back;
            currBack.next = newNode;
            this.back = newNode;
        }
        this.length++;
        return this.length;
    }

    dequeue(){
        if(this.length === 0) return null;
        else if(this.length === 1) {
            let curr = this.front;
            this.front = null;
            this.back = null;
            this.length--;
            return curr.value;
        } else {
            let curr = this.front;
            this.front = curr.next;
            this.length--;
            return curr.value;
        }
    }

    size(){
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;