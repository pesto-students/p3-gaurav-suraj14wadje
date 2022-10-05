const Tree = require("./Tree")

function getLevelOrder(left,right,result=[]){
    const current = []
    if(left != null) current.push(left.data);
    if(right != null) current.push(right.data);
    if(current.length>0)
        result.push(current);
    else return result

    getLevelOrder(left?.left,left?.right,result);
    getLevelOrder(right?.left,right?.right,result);

    return result;
}

const input = [3,9,20,null,null,15,7]
const tree = new Tree();
tree.createTreeFromArray(input);

console.log({result:getLevelOrder(tree.root)});

//Output
// { result: [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ] }