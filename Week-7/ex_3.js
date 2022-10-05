const LinkedList = require("./LinkedList");

function isLoop(list){
    let fast = list.head;
    let slow = list.head;

    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;

        if(slow === fast) return true;
    }

    return false;

}

const list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
const node = list.push(6);
list.push(7);

list.tail.next = node;

console.log({isLoop : isLoop(list)});

// output:
// { isLoop: true }

