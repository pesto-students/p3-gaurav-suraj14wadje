const Stack = require("./Stack");


function findAllPaths(source,destination,adjacencyList,path=[],result=[])
{
   
    path.push(source);

    if(source === destination) {
        result.push(path);

    }
    adjacencyList[source].forEach(vertex => {
        findAllPaths(vertex,destination,adjacencyList,[...path],result)
    });

   return result;
}



let adjacencyList = [[4,3,1],[3,2,4],[3],[4],[]];
let vertices = adjacencyList.length;
let source = 0;
let destination = vertices-1;

console.log({result:findAllPaths(source,destination,adjacencyList)});
//output
// {
//     result: [
//       [ 0, 4 ],
//       [ 0, 3, 4 ],
//       [ 0, 1, 3, 4 ],
//       [ 0, 1, 2, 3, 4 ],
//       [ 0, 1, 4 ]
//     ]
// }


adjacencyList = [[1,2],[3],[3],[]];
vertices = adjacencyList.length;
source = 0;
destination = vertices-1;

console.log({result:findAllPaths(source,destination,adjacencyList)});

//Output
// { result: [ [ 0, 1, 3 ], [ 0, 2, 3 ] ] }