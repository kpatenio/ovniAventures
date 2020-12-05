class Graph {
    constructor(n) {
        this.n = n;
        this.adjList = new Map();
    }
    
    addVertex(v) {
        this.adjList.set(v, []);
    }
    
    addEdge(v,w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }
    
    printGraph() {
        let keys = this.adjList.keys();
        for (let key of keys) {
            let values = this.adjList.get(key);
            let conc = "";
            
            for (let value of values) {
                conc += value + " ";
                console.log(key + "->" + conc);
            }
        }
    }
}

const graph = new Graph(2);
const vertices = ["A", "B"];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.printGraph();
console.log(graph);