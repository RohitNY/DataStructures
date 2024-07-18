class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (this.head == null) {
            this.head = this.tail = node;

        } else {
            let last = this.tail;
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;

    }

    pop() {
        if (this.length === 0)
            return null;
        if (this.length === 1) {
            let n = this.head;
            this.head = this.tail = null;
            this.length = 0;
            return n;
        }
        let last = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        last.prev = null;
        this.length--;
        return last;
    }

    shift() {
        if (this.head == null)
            return null;
        let node = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        node.next = null;
        this.length--;
        return node;
    }

    unshift(val) {
        let node = new Node(val);
        if (this.length == 0) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(pos) {
        if (pos < 0 || pos >= this.length)
            return null;
        if (pos <= this.length / 2) {
            let current = this.head;
            let count = 0;
            while (count < pos) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            console.log("working from end")
            let current = this.tail;
            for (i = this.length - 1; i > pos; i--) {
                current = current.prev;
            }
            return current;
        }
    }

    set(pos, val) {
        let node = this.get(pos);
        if (!node)
            return null;
        node.val = val;
        return this;
    }

    insert(pos, val) {
        if (pos < 0 || pos > this.length)
            return false;
        if (pos == 0)
            return this.unshift(val);
        if (pos == this.length)
            return this.push(val);
        let node = new Node(val);
        let prevNode = this.get(pos - 1);
        node.next = prevNode.next;
        node.prev = prevNode;
        prevNode.next = node;
        this.length++;
        return this;
    }

    remove(pos) {
        if (pos < 0 || pos >= this.length)
            return false;
        if (pos == 0)
            return this.shift();
        if (pos == this.length - 1)
            return this.pop();
        let node = this.get(pos);
        let prevNode = node.prev;
        let nextNode = node.next
        prevNode.next = nextNode;
        nextNode.prev = nextNode;
        node.next = node.prev = null;
        this.length--;
        return node;
    }

    reverse() {
        let count = 0;
        let current = this.head;
        while (count < this.length) {
            var temp = current.next;
            current.next = current.prev;
            current.prev =temp;
            if(count ==0) this.tail = current;
            if(count== this.length-1)this.head = current;
            current = current.prev;
            count++;
        }
       
        return this;
    }
}

let dlist = new DoublyLinkedList();

dlist.push(100);
dlist.push(200);
dlist.push(300);
dlist.push(400);
dlist.push(500);
