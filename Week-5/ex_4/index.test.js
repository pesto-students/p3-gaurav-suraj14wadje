const{ sum,diff,product}= require("./index");

const a = 5;
const b = 10;

test("sum operation works",()=>{
    result = sum(a,b);
    expect(a+b).toBe(result);
})

test("diff operation works",()=>{
    result = diff(a,b);
    expect(a-b).toBe(result);
})


test("product operation works",()=>{
    result = product(a,b);
    expect(a*b).toBe(result);
})