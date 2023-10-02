var timetest = (fn, t) => {
    return (...args) => {
        const rejtime = new Promise((res, rej) => {
            setTimeout(() => {
                rej("Time limit exceeded.")
            }, t)
        })
        return Promise.race([fn(...args), rejtime])
    }
}

async function fn(n) {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
}

const data = timetest(fn, 200);

data(30).then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
})