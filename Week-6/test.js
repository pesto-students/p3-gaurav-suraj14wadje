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

