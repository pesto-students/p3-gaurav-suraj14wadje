class Promise {
    states = {
        pending:"Pending",
        resolve:"Resolved",
        reject:"Reject",
        fulfilled:"fulfilled"
    }

    value=null;
    thenCb=null;
    catchCb=null;
    finallyCb=null;

    constructor(fn){
        this.currentState = this.states.pending;
        this.fn = fn;
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        fn(this.resolve,this.reject);
    }

    resolve(value){
        this.value = value;
        this.currentState = this.states.resolve;
        this.settlePromise();
    }

    reject(value){
        this.value = value;
        this.currentState = this.states.reject;
        this.settlePromise();
       
    }

    settlePromise(){
        if(this.currentState === this.states.resolve && this.thenCb !== null){
            this.thenCb(this.value)
            this.currentState = this.states.fulfilled;
        }
        else if(this.currentState === this.states.reject && this.catchCb !== null){
            this.catchCb(this.value);
            this.currentState = this.states.fulfilled;
        }

        if(this.currentState === this.states.fulfilled && this.finallyCb!== null){
            this.finallyCb();
        }
        
    }

    then(cb){
        this.thenCb = cb;
        this.settlePromise();
        return this;
    }
    catch(cb){
        this.catchCb = cb;
        this.settlePromise();
        return this;
    }
    finally(cb){
        this.finallyCb = cb;
        this.settlePromise();
        return null;
    }
}




function getNumber(ms){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let number = Math.round(Math.random()*100);
            if(number % 5 === 0){
                reject(new Error("Divisible By 5"));
            }else{
                resolve(number,"Suraj");
            }
        },ms)
        
    })
}
const p = getNumber(500);

p
.then(console.log)
.catch(console.log)
.finally(()=>console.log("Promise got fulfilled"))

