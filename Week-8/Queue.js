
class Stack{
    constructor(){
        this.size = 1000;
        this.top = -1;
        this.array = [];
    }

    push(item){
        if(this.top >= this.size) throw new Error("Stack overflow");
        this.array.push(item);
        this.top++;
    }

    pop(){
        if(this.isEmpty()) throw new Error("Stack underflow");

        const item = this.array[this.top];
        this.array.pop();
        this.top--;
        return item;
    }
    isEmpty(){
        return this.top < 0 
    }

    peek(){
        if(this.isEmpty()) throw new Error("Empty stack")

        return this.array[this.top];
    }

    get length(){
        return this.array.length;
    }

    log(){
        console.log(this.array)
    }
}

class Queue{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enQueue(item){
        this.stack1.push(item);
    }

    deQueue(){
        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop());
            }
        }
        if(this.stack2.isEmpty()) return -1;
        return this.stack2.pop();
    }

    isEmpty(){
        return this.stack1.isEmpty() && this.stack2.isEmpty();
    }

    peek(){
        return this.stack2.peek();
    }

}


module.exports = Queue;