const Stack = require("./Stack");

const parenthesisPairs = {
    '}':'{',
    ']':'[',
    ')':'('
}


function parenthesisChecker (input){
    const stack = new Stack();

    const closing = new Set(Object.keys(parenthesisPairs));
    const opening = new Set(Object.values(parenthesisPairs));

    for(char of input)
    {
        if(opening.has(char)){
            stack.push(char);
        }else if(closing.has(char)){
            if(stack.isEmpty()) return false;
            const charFromStack = stack.pop();
            if(charFromStack !== parenthesisPairs[char]) return false;
        }
    }

    if(stack.isEmpty()) return true;
    else return false;
}


let input = "{[[[]]]}(()))"
console.log({input,result:parenthesisChecker(input)})
input = "([]"
console.log({input,result:parenthesisChecker(input)})

input = "{[[[]]]}(())("
console.log({input,result:parenthesisChecker(input)})

input = "{[[[]]]}(())()"
console.log({input,result:parenthesisChecker(input)})

input = "{[[[]]]}(())(){}"
console.log({input,result:parenthesisChecker(input)})



//Output
// { input: '{[[[]]]}(()))', result: false }
// { input: '([]', result: false }
// { input: '{[[[]]]}(())(', result: false }
// { input: '{[[[]]]}(())()', result: true }
// { input: '{[[[]]]}(())(){}', result: true }