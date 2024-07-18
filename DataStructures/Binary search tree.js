class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearhTree {
    constructor() {
        this.root = null;
    }

    insert = function(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let current = this.root;
        while (true) {
            if(val == current.val) return undefined;
            if (current.val > val) {
                if (current.left == null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            }
            if (current.val < val) {
                if (current.right == null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find = function(val) {
        if(!this.root) return false;
        let current = this.root;
        while(current) {
            if(current.val == val) return true;
            if(val< current.val) current = current.left;
            else current = current.right;
        }
        return false;
    }
}

let bst = new BinarySearhTree();
//bst.insert(100);
bst.insert(10);
bst.insert(5);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);
bst.insert(13);
bst.insert(21);



