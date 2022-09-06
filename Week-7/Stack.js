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

module.exports = Stack;