
var once = function(fn){
    let call = false;
    return function(...args){

        if(call){
            return undefined;
        }
        call=true;
        return fn(args[0],args[1],args[2])
    }
}


let fn = (a,b,c) => (a + b + c)

let onceFn = once(fn)
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(1,2,3)); // 6
onceFn(2,3,6); // returns undefined without calling fn

// data = [1,2,3,4]
// console.log(data.reduce((sum,cur)=>{return sum + cur},0))
