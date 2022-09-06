const LinkedList = require("./LinkedList")

function reverseList(list){
    let currentNode = list.head;
    let prevNode = null;
    let nextNode = null;

    list.tail = list.head;

    while(currentNode != null){
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    list.head = prevNode;
    return list;
}

let list = new LinkedList();

list.push(12);
list.push(22);
list.push(32);
list.push(42);
list.log();

reverseList(list);
list.log();

// output
// 12 -> 22 -> 32 -> 42
// 42 -> 32 -> 22 -> 12