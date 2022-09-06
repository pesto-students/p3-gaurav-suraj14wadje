const Tree = require("./Tree")

function isValidBst(root){
    if(root === null) return true;

    let current = root.data;
    if((root.left != null && root.left.data > current) || (root.right != null && root.right.data < current))
        return false;

    return isValidBst(root.left) && isValidBst(root.right);
}

const tree = new Tree();

let input =[5,4,10,1,6,7,15]
tree.createTreeFromArray(input);
tree.log()

console.log({result:isValidBst(tree.root)})
