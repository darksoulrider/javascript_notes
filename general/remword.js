a = "i am mukesh rathod";

// const data = (str) => {
//     let se = str.split(" ");
//     for (i in se) {
//         if (se[i] == "am")
//             se.splice(i, 1);
//     }

//     return se;
// }




const data = (str) => {

    let arr = str.split(" ");
    let new_arr = arr.map((ele) => {
        if (ele.length >= 5) {
            return ([...ele].reverse().join(""))
        }
        return ele;
    })

    return new_arr.join(" ");
}
console.log(data(a))