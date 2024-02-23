// dates
let mydate = new Date()

// console.log(mydate.toString())
// console.log(mydate.toDateString()) // Best one
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)


// let myCreateDate = new Date(2024,0,22)
// console.log(myCreateDate.toDateString())

// let myCreateDate = new Date(2024,0,22,5,3)
// console.log(myCreateDate.toLocaleString())

// let myCreateDate = new Date("01-12-2024")
// console.log(myCreateDate.toLocaleString())


let myTimeStemp = Date.now();

let mydatee = new Date(myTimeStemp)

// console.log(myTimeStemp)
// console.log(mydatee.getTime())
// console.log(Date.now()/1000) // for coverting milli second to second
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
// console.log(newDate.toLocaleString()) 
console.log(newDate.getDay() + 1) // add + 1 to avoiding 0
console.log(newDate.getMonth() + 1) 
  
// `${newDate.getDay()} is and time and so on ..............................................`

// newDate.toLocaleString('default',{
//     weekday: "long"
// })