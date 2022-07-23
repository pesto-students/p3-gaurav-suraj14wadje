class Fib{
    constructor(n){
        this.n = n;
    }

    [Symbol.iterator] = function () {
        let i = 1;
        let old = 0;
        let current = 1;
        return{
            next:()=>{
                let temp = current;
                current = current+old;
                old = temp;

                return{
                    value:old,
                    done:i++>this.n
                }
                
            }
        }
    }
}

let fib = new Fib(7);

console.log(...fib)
//output
// 1 1 2 3 5 8 13
