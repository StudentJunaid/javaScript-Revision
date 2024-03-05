// let myName = "Junaid     ";
// let myCode = "javaScrip      ";

// console.log(myName.length)
// console.log(myCode.trim().length)
// console.log(myCode.trueLength) // our goal is to make this method in prototype


// let anotherusername = "hiteshchoudhray     "


// String.prototype.truelength = function(){
//     console.log(`${this}`);
//    console.log(`true length is ${this.trim().length}`)
// } 

// anotherusername.truelength();
// "Jerry".truelength();
// "Cherry".truelength();



// let myheroes = ["Hulk", "Captain"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "webshoot",

//     getSpiderPower: function() {
//       console.log(`Spider power is ${this.spiderman}`);
//     }
// }


// Object.prototype.jerry = function(){    // in the case of object it will create proto both array and objects
//     console.log("Jerry is presnt in all objects")
// }

// Array.prototype.jerry = function(){   // in the case of array we create proto of array 
//     console.log("Jerry is presnt in all array")
// }


// heroPower.jerry()
// myheroes.jerry();


// Inheretence

// const user = {
//     name: "chai",
//     email: "chai@gmail.com"
// }

// const Teacher1 = {
//     makevideo: true
// }

// const TeacherSupport = {
//     isAvailable: false
// }

// const TAsupport = {
//     makeassignment: 'js assignment',
//     fullTime: true,
//     __proto__: TeacherSupport
// }

// Teacher1.__proto__ = user;

// // console.log(user)

// // Modren Syntex
// Object.setPrototypeOf(TeacherSupport,Teacher1)




