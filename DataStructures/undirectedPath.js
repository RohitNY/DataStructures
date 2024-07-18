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
    console.log(graph)
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