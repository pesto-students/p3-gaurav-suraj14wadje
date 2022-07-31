function getNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(Math.random()*100),1000);
    })
}


function *generator(){
    const p1 = getNumber();
    const p2 = getNumber();
    const p3 = getNumber();

    yield p1;
    yield p2;
    yield p3;
}

async function printAsyncNumbers(){
    const gen = generator();
    for(i of gen){
        console.log(await i)
    }
}

printAsyncNumbers();



//output
// 41.63655622554157
// 56.30559446243306
// 30.212935428907773


