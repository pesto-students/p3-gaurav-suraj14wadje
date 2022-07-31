function hasDuplicate(arr){
    const set = new Set(arr);
    const arrSize = arr.length;
    const setSize = set.size;

    return arrSize !== setSize;
}

console.log(hasDuplicate([1,2,3,4,5])) // false
console.log(hasDuplicate([1,2,3,4,5,5])) // true
console.log(hasDuplicate([1,2,3,4,5,3])) // true


//output
// false
// true
// true