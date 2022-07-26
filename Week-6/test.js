
test("largest sum :",()=>{
    const {largestSum,testCases  } = require('./ex_1');

    const inputs = testCases.input;
    const outputs = testCases.output;
    for(let i = 0;i< inputs.length;i++){
        const input = inputs[i];
        const output = outputs[i];

        const result = largestSum(input);

        expect(result).toBe(output);
    }
})

test("Spiral Order Matrix :",()=>{
    const { getSpirally,testCases } = require('./ex_2');
    const inputs = testCases.input;
    const outputs = testCases.output;
    for(let i = 0;i< inputs.length;i++){
        const input = inputs[i];
        const output = outputs[i];

        const result = getSpirally(input);
        console.log(input)
        console.log(result)
        expect(result.length).toBe(output.length)
        for(let i = 0;i<output.length;i++)
            expect(result[i]).toBe(output[i]);
    }
})

test("sort 1's and zeros",()=>{
    const {sort,testCases} = require('./ex_3');

    for(let i = 0;i<testCases.input.length;i++){
        const input = testCases.input[i];
        const output = testCases.output[i];
    
        const result = sort(input);
        expect(result.toString()).toBe(output.toString());
    }
})

test.only("Problem 6.4 : Best time to buy and sell stock",()=>{
    const {maxProfit, testCases} = require("./ex_4");

    for(let i =0;i<testCases.input.length;i++){
        const input = testCases.input[i];
        const output = testCases.output[i];

        const result = maxProfit(input);

        expect(output).toBe(result)
    }
})