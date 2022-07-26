// Problem 6.6 : 3 sum
// Given an array S of n integers, find three integers in S such that the sum is closest to agiven number, target.
// Return the sum of the three integers.
// Assume that there will only be one solutionExample: 
// given array S = {-1 2 1 -4}, and target = 1. T
// he sum that is closest to the target is 2. (-1 + 2 + 1 = 2)


const closestSum = (array,target)=>{
    const sortedArray = array.sort((a,b)=>a-b);
    const n = sortedArray.length;

    let minSofar = Infinity;
    let minSum;
    for(let i = 0;i<sortedArray.length;i++){
        const firstElement = sortedArray[i];
        let left = i+1;
        let right = n-1;

        while(left < right){
            let sum = sortedArray[left] + sortedArray[right] + firstElement;
            if(sum === target) return target;
            if(Math.abs(target - sum) < minSofar){
                minSofar = Math.abs(target-sum);
                minSum = sum
            } 
            if(sum > target){
                right--;
            }else{
                left++;
            }
        }
    }
    return minSum;
}


const testCases = {
    input:[
        [[-1,2,1,-4],1],
        [[-1,2,1,-4],4],
        [[-1,2,1,-4],-4],
        [[1,24,5,6,7],10]

    ],
    output:[
        2,
        2,
        -4,
        12

    ]
}

module.exports = {
    closestSum,
    testCases
}