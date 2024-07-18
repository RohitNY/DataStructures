class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = [];
        }
        return this;
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
            return;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return this;
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v !== v1);
    }
    
    removeNode(vertex) {
        this.adjacencyList[vertex].forEach(v => this.removeEdge(v, vertex));
        delete this.adjacencyList[vertex];
    }

}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("New York");
g.addVertex("Louisville");
g.addEdge("Tokyo", "Dallas");
g.addEdge("New York", "Louisville");
g.addEdge("Louisville", "Dallas");
g.addEdge("Tokyo", "New York");
