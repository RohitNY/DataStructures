class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        const node = new Node(val,priority);
        this.values.push(node);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let ind = this.values.length - 1;
        let node = this.values[ind];

        while (ind >= 0) {
            let parentInd = Math.floor((ind - 1) / 2);
            if (parentInd < 0)
                break;
            if (this.values[parentInd].priority > node.priority) {
                this.values[ind] = this.values[parentInd];
                this.values[parentInd] = node;
                ind = parentInd;
            } else
                break;
        }
    }

    dequeue() {
        let node = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        this.sinkDown();
        return node;
    }

    sinkDown() {
        let node = this.values[0];
        const n = this.values.length;
        let ind = 0;
        while (ind < n) {
            let s = null;
            let lInd = 2 * ind + 1;
            let rInd = 2 * ind + 2;
            if (lInd < n && this.values[lInd].priority < node.priority) {
                s = lInd;
            }
            if (rInd < n && this.values[rInd].priority < node.priority) {
                if (!s || this.values[s].priority > this.values[rInd].priority) {
                    s = rInd
                }
            }
            if (!s)
                break;
            this.swap(this.values, ind, s);
            ind = s;
        }
    }

    swap(v, i, s) {
        [v[i],v[s]] = [v[s], v[i]]
    }
}

let q = new PriorityQueue();
q.enqueue("asda", 10)
q.enqueue("asda", 5)
q.enqueue("asda", 11)
q.enqueue("asda", 6)
q.enqueue("asda", 3)
q.enqueue("asda", 1)
q.enqueue("asda", 9)