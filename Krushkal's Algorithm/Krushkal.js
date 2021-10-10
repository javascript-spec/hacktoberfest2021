class UnionFind {
    constructor(elements) {
       // Number of disconnected components
       this.count = elements.length;
 
       // Keep Track of connected components
       this.parent = {};
 
       // Initialize the data structure such that all
       // elements have themselves as parents
       elements.forEach(e => (this.parent[e] = e));
    }
 
    union(a, b) {
       let rootA = this.find(a);
       let rootB = this.find(b);
 
       // Roots are same so these are already connected.
       if (rootA === rootB) return;
 
       // Always make the element with smaller root the parent.
       if (rootA < rootB) {
          if (this.parent[b] != b) this.union(this.parent[b], a);
          this.parent[b] = this.parent[a];
       } else {
          if (this.parent[a] != a) this.union(this.parent[a], b);
          this.parent[a] = this.parent[b];
       }
    }
 
    // Returns final parent of a node
    find(a) {
       while (this.parent[a] !== a) {
          a = this.parent[a];
       }
       return a;
    }
 
    // Checks connectivity of the 2 nodes
    connected(a, b) {
       return this.find(a) === this.find(b);
    }
 }

 kruskalsMST() 
 {
    // Initialize graph that'll contain the MST
    const MST = new Graph();
    this.nodes.forEach(node => MST.addNode(node));
    if (this.nodes.length === 0) {
       return MST;
    }
 
    // Create a Priority Queue
    edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
 
    // Add all edges to the Queue:
    for (let node in this.edges) {
       this.edges[node].forEach(edge => {
          edgeQueue.enqueue([node, edge.node], edge.weight);
       });
    }
 
    let uf = new UnionFind(this.nodes);
 
    // Loop until either we explore all nodes or queue is empty
    while (!edgeQueue.isEmpty()) {
       // Get the edge data using destructuring
       let nextEdge = edgeQueue.dequeue();
       let nodes = nextEdge.data;
       let weight = nextEdge.priority;
 
       if (!uf.connected(nodes[0], nodes[1])) {
          MST.addEdge(nodes[0], nodes[1], weight);
          uf.union(nodes[0], nodes[1]);
       }
    }
    return MST;
 }

