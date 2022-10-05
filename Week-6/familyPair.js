
const input = ['abc','fch','bcd','bca','aa','zz'];


const isFamilyPair=(a,b)=>{
    console.log({a,b})
    if(a.length === b.length){
        const n = a.length;
        const numOfAlphas = 'z'.charCodeAt(0)-'a'.charCodeAt(0)+1;
        const aCode ='a'.charCodeAt(0);
        for(let i = 0;i<n;i++){
            const aChar = a.charCodeAt(i)-aCode;
            const bChar = b.charCodeAt(i)-aCode;

            console.log({aChar,bChar,aCode,numOfAlphas})
            if((aChar !== ((bChar+1)%numOfAlphas) && bChar !== (aChar+1)%numOfAlphas)) return false
        }
    }else{
        return false;
    }
    return true;
}

const solve = (array)=>{
    const sortedArray = array.sort((a,b)=>{
        if(a.length !== b.length) return a.length - b.length;
        if(a<b) return -1;
        if(a>b) return 1;
        return 0;
    });
    
    const n = array.length;
    let count = 0;
    console.log(sortedArray)

    for(let i = 0;i<n;i++){
        let j = i+1;

        while(j<n && isFamilyPair(sortedArray[i],sortedArray[j])) j++;

        if(j!== i+1){
            count++;
            i=j-1;
        } 
    }

    return count;
}

console.log(isFamilyPair('abc','bca'))

// console.log(solve(input));



