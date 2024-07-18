class MaxBinaryHeap {
    constructor() {
        this.arr = [41, 39, 33, 18, 27, 12];
    }
    insert(val) {
        this.arr.push(val);
        this.bubbleUp();
        return this;

    }
    bubbleUp() {
        let val = this.arr[this.arr.length - 1];
        let pos = this.arr.length - 1;

        while (pos > 0) {

            let parentIndex = Math.floor((pos - 1) / 2);
            if (this.arr[parentIndex] > val)
                return;
            [this.arr[pos],this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[pos]];
            pos = parentIndex;
        }
        return;
    }

    GetMax() {
        if (this.arr.length === 0)
            return null;
        let last = this.arr.pop()
        if (this.arr.length === 0)
            return last;
        let val = this.arr[0];
        this.arr[0] = last;
        this.sinkDown();
        return val;
    }
    sinkDown = ()=>{
        let pos = 0;
        while (true) {
            let swap = null;
            let val = this.arr[pos];
            let leftChild = 2 * pos + 1;
            let rightChild = 2 * pos + 2;
            if (leftChild < this.arr.length && val < this.arr[leftChild]) {
                swap = leftChild;
            }
            if (rightChild < this.arr.length) {
                if ((swap == null && val < this.arr[rightChild]) || (swap != null && this.arr[rightChild] > this.arr[leftChild])) {
                    swap = rightChild
                }
            }

            if (swap == null)
                break;
            this.arr[pos] = this.arr[swap];
            this.arr[swap] = val;
            pos = swap;

        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55)
