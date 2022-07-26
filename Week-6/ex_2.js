// Problem Description
// Given a matrix of m * n elements (m rows, n columns),
// return allelements of the matrix in spiral order.
// Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

function getSpirally(matrix){
    let rows = matrix.length;
    let columns = matrix[0].length;
    let result = [];
    const mid = Math.floor(columns/2);
    
    for(let i = 0;i<=mid;i++){
        for(let j =i;j<(columns-i);j++) result.push(matrix[i][j]);

        for(let j = i+1;j<(rows-i);j++) result.push(matrix[j][columns-1-i]);

        for(let j = i+1;j<(columns-i);j++) result.push(matrix[rows-1-i][columns-j-1]);

        for(let j = i+1;j<(rows-i-1);j++) result.push(matrix[rows-j-1][i]);

        
    }

    return result;

}





const testCases = {
    input:[
        [ 
            [ 1, 2, 3 ],
            [ 4, 5, 6 ], 
            [ 7, 8, 9 ] 
        ],
        [
            [1,2,3,4,5],
            [6,7,8,9,8],
            [7,6,5,4,3],
            [2,1,2,3,4],
            [5,6,7,8,9]

        ]
    ],

    output:[
        [1,2,3,6,9,8,7,4,5],
        [1,2,3,4,5,8,3,4,9,8,7,6,5,2,7,6,7,8,9,4,3,2,1,6,5]
    ]
}

module.exports = {
    getSpirally,
    testCases
}