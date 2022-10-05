const Graph = require("./Graph");


let n = 6;
let edges = [[0,1],[0,2],[3,5],[5,4],[4,3]]

let source = 5
let destination = 0;

let graph = new Graph(n,edges);
graph.log();

console.log({source,destination,result : graph.isThereAPath(source,destination)});

source = 1;
destination = 0;
console.log({source,destination,result : graph.isThereAPath(source,destination)});


n = 3;
edges = [[0,1],[1,2],[2,0]]
source = 0
destination = 2;
graph = new Graph(n,edges);
graph.log();

console.log({source,destination,result : graph.isThereAPath(source,destination)});


// Output
// 0 => 1,2
// 1 => 0
// 2 => 0
// 3 => 5,4
// 4 => 5,3
// 5 => 3,4
// { source: 5, destination: 0, result: false }
// { source: 1, destination: 0, result: true }
// 0 => 1,2
// 1 => 0,2
// 2 => 1,0
// { source: 0, destination: 2, result: true }


