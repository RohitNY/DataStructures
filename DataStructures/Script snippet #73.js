class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const a = new Node(8)
const b = new Node(3)
const c = new Node(19)
const d = new Node(15)
const e = new Node(29)
const f = new Node(18)
const g = new Node(27)
a.left = b
a.right = c
c.left = d
c.right = e
d.right = f
e.left = g

const secondLargest = (root)=>{
    if (!root)
        return null;

    let current = root;
    let prev = null;
    while (current.right != null) {
        prev = current;
        current = current.right;
    }
    if (current.left !== null) {
        current = current.left;
        // if(current.right) {
        while (current.right != null) {
            current = current.right;
        }
        //}
        prev = current;
    }

    return prev.val;

}
/*
          8
        /    \ 
       3      19
             / \  
            15   29
            \    /
             18  27 


        8
       /
      3  

      */
