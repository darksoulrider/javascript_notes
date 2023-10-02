/*
Topic to complete ->
    1. all methods
    2. manipulations
    3. DSA questions
    4. extra
*/

// Strings are immutabel
// !  No splice method for strings

let workonme = "I am Mukesh.  I am a Full Stack developer   ";

console.log(workonme.length)           // length of  string
console.log(workonme.slice(0, 3))      // slice returns substring...
console.log(workonme.substring(0, 3))  // returns substring...
console.log(workonme.replace("Mukesh", "Joker")); // replace string name
console.log(workonme.replaceAll("am", "are")); // replace  string everywhere.
console.log((workonme.charAt(0)))

// **********************
// ! Capitalize the all first letter...

let arr = workonme.split(" ").map((ele) => {
    let a = ele.charAt(0).toUpperCase() + ele.slice(1);
    return a;
})
console.log(arr.join(" "))
// ***********
console.log(workonme.trim()) // ! trim the string
console.log(workonme.charCodeAt(0)) // char to integer
console.log(String.fromCharCode(73)) // intger to char

