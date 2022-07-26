function sort(arr){
    const counts = new Map();
    counts[0] = 0;
    counts[1] = 0;
    counts[2] = 0;

    for(let num of arr){
        counts[num]++;
    }

    let result = [];

    for(let i = 0 ;i<3;i++){
        while(counts[i]--){
            result.push(i)
        }
    }
    
    return result;
    
}


const testCases = {
    input:[
        [0, 2, 1, 2, 0],
        [0,1,0]
    ],
    output:[
        [0,0,1,2,2],
        [0,0,1]
    ]
}


module.exports = {
    sort,
    testCases
}