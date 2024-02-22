const userEmail = []

// if (userEmail) {
//     console.log("Got Email")
// } else {
//     console.log("user don't hav email");
// }

//Falsy values

// false, 0 , -0 , BegInt 0n, "", null, undefined, NaN 

// Turuthy values

// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }

// let myObj = {
//     name: "Jerry",
//     nikname: "berry"
// }

// let hold = console.log(Object.keys(myObj) )// Coverting Object into Array




// Nullish coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 15 ?? 10;

console.log(val1)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("greater then 80"): console.log("less then 80")



