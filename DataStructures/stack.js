class Node{
    constructor(val){
        this.val = val;
        this.next= null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size =0;
    }
    push(val){
        let node = new Node(val);
        if(!this.first){
            this.first = this.llast = node;
        }
        else{
            node.next = this.first;
            this.first = node;
        }
        this.size++;
        return this.size;
    }

    pop(){
        if(this.size <=0)return null;
        let node = this.first;
        if(this.size ==1){
            this.first = this.last = null
        }else {
            this.first = this.first.next;
        }
        this.size--;
        return node.val;
    }
}