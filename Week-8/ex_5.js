const Graph = require("./Graph");

function getTownJudge(graph){
    const list = graph.adjacencyList;
    const n = graph.vertices-1;
    console.log(list)

    const numberOfTrusts = Array(n+1).fill(0);
    let judge = 0;
    for(let i = 1;i<=n;i++){
        list[i].forEach(trust => {
            numberOfTrusts[trust]++;
        });

        //because a judge trusts no one
        if(list[i].length === 0) judge = i;
    }

    // n-1 : because everyone trusts judge except the Judge
    if( numberOfTrusts[judge] === (n-1)) return judge
    else return -1;


}


//Test case 1
let n = 2;
let trust = [[1,2]]
let graph = new Graph(n+1,trust,true);
graph.log()
console.log({result : getTownJudge(graph)})
// Output
// 0 => 
// 1 => 2
// 2 => 
// [ [], [ 2 ], [] ]
// { result: 2 }


//test case 2
n = 3;
trust = [[1,3],[2,3]]
graph = new Graph(n+1,trust,true);
graph.log()
console.log({result : getTownJudge(graph)})
//output
// 0 => 
// 1 => 3
// 2 => 3
// 3 => 
// [ [], [ 3 ], [ 3 ], [] ]
// { result: 3 }


//test case 3
n = 3;
trust = [[1,3],[2,3],[3,1]]
graph = new Graph(n+1,trust,true);
graph.log()
console.log({result : getTownJudge(graph)})
//Output
// 0 => 
// 1 => 3
// 2 => 3
// 3 => 1
// [ [], [ 3 ], [ 3 ], [ 1 ] ]
// { result: -1 }

