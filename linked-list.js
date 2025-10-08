class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.lenght = 0
    }

    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.lenght++
        return this
    }

    prepend(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.lenght++
        return this
    }

    getAtIndex(index) {
        if (index < 0 || index >= this.lenght) return null;
        let i = 0
        let current = this.head
        while (i < index) {
            current = current.next
            i++;
        }
        return current
    }

    insertAt(index, value) {
        if (index < 0 || index >= this.lenght) return null;
        if (index == 0) this.prepend();
        if (index === this.lenght) this.append();

        let prevNode = this.getAtIndex(index - 1)
        let newNode = new Node(value);
        newNode.next = prevNode.next
        prevNode.next = newNode
        this.lenght++
        return this;
    }
    shift() {
        if (!this.head) return null;
        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        this.length--;
        if (this.length === 0) this.tail = null;
        return removed;
    }

    // Remove tail
    pop() {
        if (!this.head) return null;
        if (this.length === 1) {
            const removed = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removed;
        }
        // iterate to second last
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        const removed = this.tail;
        current.next = null;
        this.tail = current;
        this.length--;
        return removed;
    }
    // Convert to array (helper)
    toArray() {
        const res = [];
        let cur = this.head;
        while (cur) {
            res.push(cur.value);
            cur = cur.next;
        }
        return res;
    }


    reverse() {
        // [1, 2, 3, 4, 5]
        if (!this.head || this.lenght == 1) return this;
        let prev = null
        let current = this.head
        this.tail = this.head
        for (let index = 0; index < this.length; index++) {
            const next = current.next // next is 2
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
        return this
    }

}

let myList = new LinkedList()
myList.append(1)
myList.append("hello")
myList.append(3)
myList.append(4)
myList.append(4)

myList.prepend(6)
myList.append(4)
myList.append(4)
myList.append(4)
myList.append(5)

myList.insertAt(3, "Hi")

console.log(myList.getAtIndex(2), "Index at two")
console.log(myList.getAtIndex(3), "Index at three")
console.log(myList);
console.log(myList.toArray(), "To array");

// console.log(myList.toArray().reverse());

function reverseRecursive(node, prev = null) {
    if (!node) return prev;
    const next = node.next;
    node.next = prev;

    return reverseRecursive(next, node)
}

myList.head = reverseRecursive(myList.head);
myList.tail = myList.head
// if()