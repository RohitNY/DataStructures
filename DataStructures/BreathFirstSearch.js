class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;

    }
    insert(val) {
        var node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
        var current = this.root;
        while (true) {
            if (!current)
                return false;
            if (current.val < val) {
                if (current.right == null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
            if (current.val > val) {
                if (current.left == null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            }

        }

        return this;
    }

    BFS() {
        var data = [];
        var queue = [];
        var node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        return data;
    }

    DFS_preOrder() {
        var node = this.root;
        var data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(node);
        return data;
    }
    DFS_postOrder() {
        var node = this.root;
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right)traverse(node.right);
            data.push(node.val);
        }
        traverse(node);
        return data;
    }

    DFS_inOrder(){
        var data =[];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var bt = new BinaryTree();
bt.insert(10);
bt.insert(6);
bt.insert(15);
bt.insert(3);
bt.insert(20);
bt.insert(8);
