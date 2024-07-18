
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = []
    }
    Enqueue(val, priority) {
        const node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        while(idx > 0) {
            const parentIdx = Math.floor((idx -1)/2);
            if(this.values[parentIdx].priority <= this.values[idx].priority) break;
            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
            idx = parentIdx;
        }
    }

    Dequeue() {
        if(this.values.length === 0) return null;
        const node = this.values[0];
        const replacementVal = this.values.pop();
        if(this.values.length) {
            this.values[0] = replacementVal;
            this.sinkDown();
        }
        return node.val;
    }

    sinkDown() {
        let idx = 0;
        const totalValues = this.values.length - 1;
        while(idx < totalValues) {
            const firstChildIndex = 2*idx + 1;
            if(firstChildIndex > totalValues) break;
            let swapIdx = null;
            if(this.values[firstChildIndex].priority < this.values[idx].priority) swapIdx = firstChildIndex;

            const secondChildIdx = 2*idx + 2;
            if(secondChildIdx <= totalValues
              && this.values[secondChildIdx].priority < this.values[idx].priority
              && this.values[secondChildIdx].priority < this.values[firstChildIndex].priority)
                swapIdx = secondChildIdx;

            if(swapIdx === null) break;
            [this.values[idx], this.values[swapIdx]] = [this.values[swapIdx], this.values[idx]];
            idx = swapIdx;
        }
    }
}

const queue = new PriorityQueue();
queue.Enqueue(100,10)
queue.Enqueue(600,3)
queue.Enqueue(500,5)
queue.Enqueue(400,7)
queue.Enqueue(300,1)
queue.Enqueue(200,11)
queue.Enqueue(1,1)