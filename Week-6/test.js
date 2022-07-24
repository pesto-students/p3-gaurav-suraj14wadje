const {largestSum,testCases : largestSumTestCases } = require('./ex_1');



test("largest sum :",()=>{
    const inputs = largestSumTestCases.input;
    const outputs = largestSumTestCases.output;

    for(let i = 0;i< inputs.length;i++){
        const input = inputs[i];
        const output = outputs[i];

        const result = largestSum(input);

        expect(result).toBe(output);
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