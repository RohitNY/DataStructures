class Graph {
    constructor() {
        this.adjancencyList = {};
    }

    addVertex(vertex) {
        this.adjancencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjancencyList[vertex1].push(vertex2);
        this.adjancencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjancencyList[vertex1] = this.adjancencyList[vertex1]?.filter(v=>v != vertex2);
        this.adjancencyList[vertex2] = this.adjancencyList[vertex2]?.filter(v=>v != vertex1);
    }

    removeVertex(vertex) {
        this.adjancencyList[vertex].forEach(v=>{
            this.removeEdge(vertex, v);
        }
        );
        delete this.adjancencyList[vertex];
    }

    breadthFirstSearch(start) {
        const visited = {};
        const queue = [start];
        const result = [];
        let adjancencyList = this.adjancencyList;
        while (queue.length) {
            let currentVertex = queue.shift()
            result.push(currentVertex);
            visited[currentVertex] = true;
            this.adjancencyList[currentVertex].forEach(v=>{
                if (!visited[v]) {

                    visited[v] = true;
                    queue.push(v)
                }

            }
            )
        }
        return result;

    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
