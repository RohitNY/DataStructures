 class Node {
   constructor(val) {
     this.val = val;
     this.left = null;     this.right = null;
   }
 }

const maxPathSum = (root) => {
  if(root===null) return -Infinity;
 // if (root.left === null && root.right === null) return root.val;
  return root.val + Math.max( maxPathSum(root.left), maxPathSum(root.right))
};




const pathFinder = (root, target, arr = []) => {
  // todo
  if(root===null) return null;
  if(root.val===target) return [root.val];
  let leftPath = pathFinder(root.left); console.log(leftPath)
  if(leftPath!==null)return [root.val, ...path];
 let rightPath = pathFinder(root.right);
 console.log(rightPath)
  if(rightPath) return [root.val, ...path];
   return null
  };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
pathFinder(a, 'e');

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = getGraph(edges);
  const seen = new Set();
  const stack = [nodeA];
  while(stack.length) {
    const current = stack.pop();
   seen.add(current);
    if(current===nodeB) return true;
    for(const neighbor of graph.get(current)) {
      if(!seen.has(neighbor)){
        stack.push(neighbor)
      }
    }
  }
  return false;
};

const getGraph = (edges) => {
  const graph = new Map();
  for(const [src, dst] of edges) {
    if(!graph.has(src)) graph.set(src,[]);
    if(!graph.has(dst)) graph.set(dst,[]);
    graph.get(src).push(dst);
    graph.get(dst).push(src);
    return graph;
  }
}
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'j', 'm');
