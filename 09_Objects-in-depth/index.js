// singleton
// object create

// object litrals

const mySym = Symbol("key1")

// console.log(mySym)

const jsUser = {
    name: "Jerry",
    [mySym]: "myKey1",
    "Full name": "JerryBerry",
    age: 18,
    location: "dehli",
    email: "jery@gmail",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Wednesday"],
}

// console.log(jsUser.name)
// console.log(jsUser["email"]) // this is also way the get object keys
// console.log(jsUser["Full name"])


// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])


// console.log(jsUser.email = "Berry@gmail.com")
// Object.freeze(jsUser) // it will freex the array we can't change anything in array after that
// jsUser.email = "Cerry@gmail.com"
// console.log(jsUser.isLoggedIn = true)
// console.log(jsUser)

// jsUser.greeting = function(){
//     console.log("hello World")
// }
// console.log(jsUser.greeting)
// console.log(jsUser.greeting())
// console.log(jsUser)

// jsUser.greeting1 = function(){
//     console.log(`Hello js user ${this.name}`)
// }

// console.log(jsUser.greeting1())
// console.log(jsUser)

