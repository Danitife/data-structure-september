class DNode {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.lenght = 0
    }

    append(value) {
        const node = new DNode(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.lenght++
        return node
    }
    findNode(value) {
        let cur = this.head
        while (cur) {
            if (cur.value === value) return cur;
            cur = cur.next
        }
        return null
    }
    forEach(fn) {
        let cur = this.head;
        let i = 0;
        while (cur) {
            fn(cur, i);
            cur = cur.next;
            i++;
        }
    }

    // removeNthFromEnd(n) {
    //     if (n <= 0 || this.lenght === 0) return null;
    //     // Dummy sentinel to simplify edge-cases
    //     const dummy = new DNode(null);
    //     dummy.next = this.head;
    //     if (this.head) this.head.prev = dummy;
    //     let fast = dummy;
    //     let slow = dummy;

    //     // Advance fast by (n+1) steps 2
    //     for (let i = 0; i <= n; i++) {
    //         fast = fast ? fast.next : null;
    //         if (fast === null && i < n) {
    //             // n is larger than list length
    //             if (this.head) this.head.prev = null; // restore
    //             return null;
    //         }
    //     }
    //     // Move both until fast reaches null
    //     while (fast) {
    //         fast = fast.next;
    //         slow = slow.next;
    //     }
    //     // slow.next is the node to remove
    //     const toRemove = slow.next;
    //     if (!toRemove) {
    //         if (this.head) this.head.prev = null; // restore
    //         return null;
    //     }
    //     // Unlink toRemove
    //     slow.next = toRemove.next;
    //     if (toRemove.next) toRemove.next.prev = slow;

    //     // Fix head & tail for the list (dummy used temporarily)
    //     const newHead = dummy.next;
    //     this.head = newHead ? newHead : null;
    //     if (this.head) this.head.prev = null;

    //     if (toRemove === this.tail) {
    //         // new tail is toRemove.prev unless that's the dummy
    //         const possibleNewTail = toRemove.prev === dummy ? null : toRemove.prev;
    //         this.tail = possibleNewTail;
    //     }
    //     toRemove.next = toRemove.prev = null;
    //     this.lenght--;

    //     // If list became empty, ensure tail is null
    //     if (this.lenght === 0) this.tail = null;

    //     return toRemove;

    // }

    // removeNthFromEnd(n) {
    //     [1, 2, 3, 4, 5]
    //     if (n <= 0 || this.lenght == 0) return null;
    //     let cur = this.tail;

    //     for (let i = 0; i < n; i++) {
    //         if (i == n) {
    //             cur.prev = null
    //         }
    //         return cur
    //     }
    //     this.lenght--;
    // }

    removeNthFromEnd(n) {
        if (n <= 0 || this.lenght === 0) return null;

        // Find the position from the start
        const indexFromStart = this.lenght - n;
        if (indexFromStart < 0) return null;

        let current = this.head;
        for (let i = 0; i < indexFromStart; i++) {
            current = current.next;
        }

        if (current.prev) current.prev.next = current.next;
        else this.head = current.next; // removing head

        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev; // removing tail

        this.lenght--;
        return current;
    }

}


let dList = new DoublyLinkedList()

dList.append(3)
dList.append(5)
dList.append(7)
dList.append(2)
console.log("-------------Before-----------------");
console.log(dList);
console.log(dList.findNode(2), "Finding Node");
console.log("-------------After-----------------");
console.log(dList.removeNthFromEnd(2));
console.log(dList);

