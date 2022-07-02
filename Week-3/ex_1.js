function add(a,b){
    console.log("calculating sum...")
    return a+b;
}

function memoize(func){
    let cache = {}
    function wrapper(...params){
        let key = params.toString();

        if(cache[key]) return cache[key];

        cache[key] = func(...params);
        return cache[key];
    }
    return wrapper;
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(1,2));
console.log(memoizeAdd(1,2));


// Output is:

// calculating sum...
// 3
// 3