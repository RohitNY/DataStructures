class MaxHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        if(idx === 0) return;
        while(idx > 0) {
            const parentIdx = Math.floor((idx-1)/2);
            if(this.values[parentIdx] >= this.values[idx]) break;
            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
            idx = parentIdx;
        }
    }
    extractMax() {
        if(!this.values.length) return null;
        const maxVal = this.values[0];
        if(this.values.length === 1) {
            this.values.pop();
            return maxVal;
        }
        this.values[0] = this.values.pop();
        this.sinkdown();
        return maxVal;
    }
    sinkdown() {
        let idx = 0;
        let totalValues = this.values.length;
        while(idx < totalValues) {
            let firstChildIdx = 2*idx + 1;
            let swapIdx = null;
            if(firstChildIdx < totalValues 
                && this.values[firstChildIdx] > this.values[idx]) swapIdx = firstChildIdx;
            const secondChildIdx = 2*idx + 2;
            if(secondChildIdx < totalValues
              && this.values[secondChildIdx] > this.values[idx]
              && this.values[secondChildIdx] > this.values[firstChildIdx]) swapIdx = secondChildIdx;
            if(swapIdx === null) break;
            [this.values[idx], this.values[swapIdx]] = [this.values[swapIdx], this.values[idx]];
            idx = swapIdx;
        }
    }
}

const heap = new MaxHeap();
heap.insert(10)
heap.insert(4)
heap.insert(100)
heap.insert(29)
heap.insert(80)
heap.insert(101)