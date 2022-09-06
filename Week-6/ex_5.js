// Given an one-dimensional unsorted array A containing N integers.
// You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.
// Return1 if any such pair exists else return 0. 
// Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105



const doPairExist = (array,requiredDiff)=>{
    const sortedArray = array.sort((a,b)=>a-b);

     requiredDiff = Math.abs(requiredDiff);
    let left = 0;
    let right = array.length-1;

    for(let i = 0;i<array.length;i++){

        left = i+1;
        right = array.length-1;
        const current = sortedArray[i];
        const requiredElement = current+requiredDiff
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            const midElement = sortedArray[mid];
            if(midElement === requiredElement) return 1;

            if(midElement > requiredDiff) right = mid-1;
            else left = mid+1;
        } 
    }

    return 0;
}


const testCases = {
    input:[
        [[5, 10, 3, 2, 50, 80], 78],
        [[5, 10, 3, 2, 50, 80], 7],
        [[5, 10, 3, 2, 50, 80], -48],
        [[5, 10, 3, 2, 50, 80], -78],
        [[5, 10, 3, 2, 50, 80], -7],
        [[-10, 20],30],
        [[5, 80, 3, 2, 50, 80], 0],
        [[5, 10, 3, 2, 50, 80], 0],


    ],
    output:[
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0
    ]
}


module.exports ={
    doPairExist,
    testCases
}