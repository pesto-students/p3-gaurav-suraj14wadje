const Queue = require("./Queue");

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree{
    constructor(){
        this.root = null;
    }

    createTreeFromArrayRecursive(array,i){
        if(i>= array.length || array[i] === null) return null;

        const root = new Node(array[i]);

        root.left = this.createTreeFromArrayRecursive(array,(2*i)+1);
        root.right = this.createTreeFromArrayRecursive(array,(2*i)+2);

        return root;
    }

    createTreeFromArray(array){
        this.root = this.createTreeFromArrayRecursive(array,0);
    }

    inOrder(root){
        if(root !== null){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }
    
    log(){
        this.inOrder(this.root)
    }
}


module.exports = Tree;