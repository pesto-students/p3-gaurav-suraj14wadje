// Find the contiguous subarray within an array, A of length N which has the largest sum.
// Input Format:The first and the only argument contains an integer array, A. 
// Output Format: Return aninteger representing the maximum possible sum of the contiguous subarray.

// Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 
// For example:Input 1: A = [1, 2, 3, 4, -10]
// Output 1: 10

function largestSum(arr){
    let globalMax = arr[0];
    let localMax = globalMax;
    const n = arr.length;

    for(let i = 1 ;i<n;i++){
        const current = arr[i];

        localMax = localMax+current;
    
        if(localMax < current){
            localMax = current;
        }

        if(localMax > globalMax)
            globalMax = localMax;
    }

    return globalMax;
}

const testCases = {
    input : [
        [1, 2, 3, 4, -10],
        [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        [-5,-4,-3,-2],
    ],
    output: [
        10,
        6,
        -2
    ]
}

module.exports = {
    largestSum,
    testCases
};
