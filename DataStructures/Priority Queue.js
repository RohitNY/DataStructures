class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
        return this;
    }
    bubbleUp(){
        let pos = this.values.length - 1;
       

        while(pos > 0) {
             let node = this.values[pos];
            let parentIdx = Math.floor((pos-1)/2);
            if(parentIdx<0) break;
            if( 
                this.values[parentIdx].priority > node.priority){
                this.values[pos] = this.values[parentIdx];
                this.values[parentIdx] = node;
                pos = parentIdx;
            }
        }
    }

    dequeue() {
        if(this.values.length === 0) return null;
        let val = this.values.pop();
        let returnVal = this.values[0];
        this.values[0] = val;
        this.sinkDown();
        return returnVal;
    }

    sinkDown() {
        let length = this.values.length;
        
        let pos =0;
        while(true) {
            let node = this.values[pos];
            let swap =0;
            let leftChild = 2*pos +1;
            let rightChild = 2*pos +2;
            if(leftChild < length) {
                if(this.values[leftChild].priority > node.priority ){
                    swap = leftChild;
                }
            }
            if(rightChild < length) {
                if((swap==null&& this.values[rightChild].priority > node.priority)
                  || (swap!=null && rightChild > leftChild)){
                    swap = rightChild
                  }
            }
            if(swap == null) break;
            this.values[pos] = this.values[swap];
            this.values[swap] = node;
            pos = swap;
        }
    }
}