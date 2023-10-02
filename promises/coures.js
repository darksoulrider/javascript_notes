const promise_1  = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1000);
    }, (1000));
});

console.log(promise_1)