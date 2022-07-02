function createStack() {
   let items = [];

  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}
const stack = createStack();

stack.push(10);
stack.push(5);

stack.items = [1,2,4]

console.log(stack.pop()); 
console.log(stack.pop()); 

// output is :
// 5
// 10

