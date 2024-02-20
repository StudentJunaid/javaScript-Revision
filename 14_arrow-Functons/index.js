const user = {
    username: "Jerry",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMassage()
// user.username = "Berrry"
// user.welcomeMassage()

// console.log(user.welcomeMassage())
// console.log(this)

// function chai() {
//     let username = "Berry"
//     console.log(this.username) // we can't use this keyword in function its only for objects
// }

// chai()

// const chai = function(){
//     let username = "Berry"
//         console.log(this.username) // we can't use this keyword in function its only for objects
// }

// chai()

// Arrow function

// const chai = () => {
//     let username = "Berry"
//         console.log(this.username) // we can't use this keyword in function its only for objects
// }

// chai()

// Basic arrow function
// const addtwoNum = (num1,num2) =>{
//     return num1 + num2
// }

// in {} we need to use return keyword and it's necessery

// Implicit arrow function 
// const addtwoNum = (num1,num2) =>  num1 + num2

// const addtwoNum = (num1,num2) =>  (num1 + num2) // in () we don"t need to use return keyword 

const addtwoNum = (num1,num2) => ({username: "hitesh"}) // if we write object then it's necessery to wrap up in ()


console.log(addtwoNum(8, 9));





