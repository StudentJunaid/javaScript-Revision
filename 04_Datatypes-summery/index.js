// Primitive 

// 7 types : String ,Number ,Boolean, Null, Undefined, Symbol, BigIng

//  JavaScript is a dynamically typed language.

// const score = 100;
// const scoreValue = 100.3;
// const isloggedin = false;
// const outSideTemp = null;
// let userEmail; 

// const id = Symbol('123')
// const anotherid = Symbol('123')
 
// console.log(id != anotherid);

// const bigNumer = 3456678890638373366n



// ***********************************************  non-premitive  *******************************************8

// Array, Objects, Functions


// Arrays
let hero = ["hitesh","herry","sarthak","harsh"]

// Objects
let newObj = {
    name: "jeery",
    age: 22
}

// Functions

const myFunction = function(){
    //  console.log("hello")
}

// myFunction()

// console.log(typeof hero)   // type Object
// console.log(typeof newObj)  // type Object
// console.log(typeof myFunction)  // type function






// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// **************************** Stack and Heap memory in javascript ******************************************

// stak (Premitive), Heap (Non-Premitive)

// Premitive type give us value 

let MyName = "Junaid Noor"

let anothername = MyName;

anothername = "JerryOp"

// console.log(MyName)
// console.log(anothername)

// Non-premitive types give us original value

let userOne = {
    email: "user@gmail.com",
    upi: "user@bl"
}

let userTwo = userOne;

userTwo.email = "Jerry@gmail.com"

// console.log(userOne.email)
// console.log(userTwo.email)
