class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.tail=null;
        this.head = null;
        this.length = 0;      
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    get(pos) {
        if(pos<0 || pos >= this.length) return null;
        if(pos <= this.length/2){
            let count =0;
            let node = this.head;
            while(count < pos) {
                node = node.next;
                count++;
            }
            return node;
        }else{
            let count = this.length -1;
            let node = this.tail;
            while(count !== pos){
                node = this.tail.prev;
            }
            return node;
        }
    }
    set(pos, val){
        
        let node = this.get(pos);
        if(!node) return false;
        node.val = val;
        return true;
    }
}
