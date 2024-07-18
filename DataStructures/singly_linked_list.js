class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let n = new Node(val);
        if (!this.head) {
            this.head = this.tail = n;
            this.length++;
            return;
        } else {
            this.tail.next = n;
            this.tail = n;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.tail)
            return null;
        let val = this.tail;
        if (this.length == 1) {
            this.head = this.tail = null;
            return val;
        }
        let current = this.head;
        let prevNode = this.head;
        while (current.next) {
            prevNode = current;
            current = current.next;
        }
        this.tail = prevNode;
        this.tail.next = null;
        return val;

    }

    shift() {
        if (!this.head)
            return null;
        let val = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length == 0)
            this.tail = null;
        return val;
    }

    unshift(val) {
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        if (this.length == 1)
            this.tail = this.head;
    }
    get(pos) {
        if (pos < 0 || pos > this.length - 1)
            return null;
        let count = 0;
        let current = this.head;
        while (count < pos) {
            current = current.next;
            count++;
        }
        return current;
    }

    set(pos, val) {
        let node = this.get(pos);
        node.val = val;
        return node;
    }
    insert(pos, val) {
        if (pos == 0) {
            return this.unshift(val);
        }
        if (pos == this.length - 1) {
            return this.push(val);
        }
        let node = this.get(pos - 1);
        let n = new Node(val);
        n.next = node.next;
        node.next = n;
    }

    remove(pos) {
        if (pos < 0 || pos > this.length)
            return null;
        if (pos == 0)
            return this.shift();
        if (pos == this.length - 1)
            return this.pop();
        var node = this.get(pos - 1);
        let prevNode = node.next;
        node.next = prevNode.next;
        this.length--;
        return prevNode;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev = null;
        let last = this.tail;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    }
}

var list = new SinglyLinkedList();
list.push("hello");
list.push(" world");
list.push("!!!");
list.push("????");
