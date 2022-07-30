const Stack = require("./Stack");

function nextGreaterElement(array){
    const stack = new Stack();
    stack.push(array[0]);
    const result = [];
    for(let i = 1;i<array.length;i++){
        while(!stack.isEmpty() && array[i] > stack.peek()){
            result.push(array[i]);
            stack.pop();
        }
        stack.push(array[i]);
    }
    while(!stack.isEmpty()){
        result.push(-1);
        stack.pop();

    } 

    return result
}


let input = [1,3,2,4];
console.log({input,output:nextGreaterElement(input)});



// output
// { input: [ 1, 3, 2, 4 ], output: [ 3, 4, 4, -1 ] }