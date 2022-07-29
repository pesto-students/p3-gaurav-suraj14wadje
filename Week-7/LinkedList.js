class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.maxSize = 1000;
    }

    push(data){
        if(this.size > this.maxSize) throw new Error("List overflow");
        this.size++;
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            return true;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

    }

    log(){
        const arr = [];
        let ptr = this.head;

        while(ptr != null){
            arr.push(ptr.value);
            ptr = ptr.next;
        }

        console.log(arr.join(" -> "));
    }
}



module.exports = LinkedList