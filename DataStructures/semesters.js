const semestersRequired = (numCourses, prereqs) => {
  let semesterCount = 0;
  const graph = getGraph(prereqs);
  const attended = new Set();
  for(const [course,vals] of graph.entries()) {
    if(explore(graph,course, attended)) semesterCount += 1;
  }
  return semesterCount;
};

const explore = (graph, course, attended) => {
  if(attended.has(course)) return false;
  attended.add(course);
  for(const sibling of graph.get(course)) {
    explore(graph, sibling, attended);
  } 
  return true;
}
const getGraph = (prereqs) => {
  const graph = new Map();
  for(const [src,dest] of prereqs) {
    if(!graph.has(src)) graph.set(src, []);
    graph.get(src).push(dest);
  }
    console.log(graph)
  return graph;
}

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
semestersRequired(numCourses, prereqs);