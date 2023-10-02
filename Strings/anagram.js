// let a = "anagram"
// let b = "nagarma"

// function check(a, b) {
//     console.log(a, b)
//     let a = false;
//     if (a.length != b.length) return a;
//     for (let i = 0; i < a.length; i++) {
//         if (a.includes(b[i])) {
//             a = true;

//         } else {
//             a = false;
//         }
//     }
// }

// check(a, b)

let a = [1, 2, 3, 5]
let b = [2, 1, 3, 8]
function c(a, b) {
    let res = false;
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            b.splice(b.indexOf(a[i]), 1)
            res = true;
        } else {
            return false;
        }
        return res;

    }
    return res;

}

console.log(c(a, b))