class Graph {
    constructor() {
        this.adjancencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjancencyList[vertex])
            this.adjancencyList[vertex] = [];
        return this;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjancencyList[vertex1] && this.adjancencyList[vertex2]) {
            this.adjancencyList[vertex1].push(vertex2);
            this.adjancencyList[vertex2].push(vertex1);
        }
        return this;
    }

    removeEdge(vertex1, vertex2) {
        this.adjancencyList[vertex1] = this.adjancencyList[vertex1].filter(v=>v != vertex2);
        this.adjancencyList[vertex2] = this.adjancencyList[vertex2].filter(v=>v != vertex1);
    }

    removeVertex(vertex) {
        this.adjancencyList[vertex].forEach(v=>this.removeEdge(vertex, v));
        delete this.adjancencyList[vertex];
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjancencyList = this.adjancencyList;
        const dfs = function(vertex) {
            if (!vertex)
                return null;
            result.push(vertex);
            visited[vertex] = true;
            adjancencyList[vertex].forEach(v=>{
                if (!visited[v])
                    dfs(v)
            }
            );
        }
        dfs(start);
        return result;
    }

    depthFirstIterative(start) {
        const result = [];
        const visited = {};
        const stack = [];
        stack.push(start);

        while (stack.length > 0) {
            let vertex = stack.pop();
            if (visited[vertex]) continue;
            result.push(vertex);
            visited[vertex] = true;
            this.adjancencyList[vertex].forEach(v=>{
                if (!visited[v])
                    stack.push(v)
            }
            );
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
