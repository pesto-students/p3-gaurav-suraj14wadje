const Tree = require("./Tree")




const tree = new Tree();
let input = [3,9,20,null,null,15,7]

tree.createTreeFromArray(input)
tree.log();


function findMaximumDepth(root){
    if(root === null) return 0;

    else return 1+(Math.max(findMaximumDepth(root.left),findMaximumDepth(root.right)));
}

console.log({result:findMaximumDepth(tree.root)})

// Output
// 3
// 9
// 20
// 15
// 7
// { result: 3 }