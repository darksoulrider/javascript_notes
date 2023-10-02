function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const argsString = JSON.stringify(args) 

        if(cache.has(argsString)){
            return cache.get(argsString)
        }
        const res = fn(...args);
        cache.set(argsString,res)
        return res;
    }
}

let count = 0;

const memoizedFn = memoize(function(...args){
    count +=1;
    return args.reduce((sum, current) => sum + current, 0);
});

console.log(memoizedFn(1,2,4))
console.log(memoizedFn(1,2,4))
console.log(memoizedFn(1,2,4))
console.log(count)

