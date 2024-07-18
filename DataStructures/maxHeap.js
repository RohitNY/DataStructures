class MaxHeap {
    constructor() {
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        if(this.values.length ===1) return;
        let ind = this.values.length -1;
        let val = this.values[ind];
        while(ind>=0) {
            let parentInd = Math.floor((ind-1)/2);
            if(this.values[parentInd] < this.values[ind]) {
                this.values[ind] = this.values[parentInd];
                this.values[parentInd] = val;
                ind = parentInd;
            }
            else break;
        }
    }

    extractMax() {
        let val = this.values[0];
        this.values[0] = this.values[this.values.length -1];
        this.values.pop();
        this.sinkDown();
        return val;
    }

    sinkDown() {
        let i =0, val = this.values[0];
        while(i< this.values.length){
               let s = null;
            let childInd = 2*i +1;
            if(this.values[childInd] > val) {
                s = childInd;
            }
            let childInd2 = 2*i+2;
            if(this.values[childInd2] > val) {
               if(this.values[childInd2] > this.values[childInd]) s = childInd2;
            }
            if(!s) break;
            this.swap(this.values, i, s);
            i = s;
        }
         
    }
    swap(v,i,s) {
        [v[i], v[s]]=[v[s], v[i]]
    }
}

let heap = new MaxHeap();
heap.insert(30)
heap.insert(38)
heap.insert(10)
heap.insert(50)
heap.insert(32)
heap.insert(37)
heap.insert(28)
heap.insert(1)
heap.insert(62)
heap.insert(12)
heap.insert(15)