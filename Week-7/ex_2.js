const LinkedList = require("./LinkedList");


function rotateList(list,n){
    if(n >= list.size) throw new Error("n exceeds size of list");
    if(n == 0) return;

    let fast = list.head;
    let i = n;
    while(--i > 0){
        fast=fast.next;
    }

    list.tail.next = list.head;
    list.head = fast.next;
    fast.next = null;

}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);

list.log();

rotateList(list,4);
list.log();

//output
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
// 5 -> 6 -> 7 -> 1 -> 2 -> 3 -> 4