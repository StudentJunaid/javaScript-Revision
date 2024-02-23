// // const coding = ["js","py","c++","ruby"]

// // const value = coding.forEach((elem) =>{
// //     //  console.log(elem)
// //      return elem
// // })

// // console.log(value) // its not return Any Value

// const myNum = [1,2,3,4,5,6,7,8,9,10]


// // const myNewNum = myNum.filter((item) => {
// //     return item > 4
// // })

// // console.log(myNewNum)  //  its return  Value


// // const myNewNum = []

// // myNum.forEach((item) => {
// //    if(item > 4){
// //     myNewNum.push(item)
// //    }
// // })

// // console.log(myNewNum)  //  its return  Value


// const books = [
//     {
//         title: "The Great Gatsby",
//         genre: "History",
//         publish: "2010",
//         edition: "First Edition",
//     },
//     {
//         title: "To Kill a Mockingbird",
//         genre: "Classics",
//         publish: " 1960",
//         edition: "Second Edition",
//     },
//     {
//         title: "1984",
//         genre: "History",
//         publish: "2007",
//         edition: "First Edition",
//     },
//     {
//         title: "The Hobbit",
//         genre: "Fantasy",
//         publish: "2008",
//         edition: "Third Edition",
//     },
//     {
//         title: "The Catcher in the Rye",
//         genre: "Fantasy",
//         publish: "2008",
//         edition: "First Edition",
//     },
// ];

// let userbook = books.filter((bk)=> bk.genre === "History")

// userbook = books.filter((bk)=> { return bk.publish >= "2000"  && bk.genre === "History"})

// console.log(userbook)