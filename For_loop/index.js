// For loop


// let loop = 100;

// for(let i = 0; i <= loop; i++){
//     const element = i;
//     console.log(element)
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i
//     if (element == 5) {
//         console.log("number is 5")
//     }
//     console.log(element)
//     console.log(i)
// }

// let number = 1000

// for (let i = 0; i <number; i++) {
//     const element = i;
//     console.log(`I Love You  ${element} times`)

// }

for (let i = 1; i <=10; i++) {
//    console.log( `outer loop ${i}`) // outer loop run one time and inner loop run 10 time
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j}`)
        // console.log(i + '*' + j + ' = ' + i*j)
    }
}



let myarray = ["jerry", "Berry", "Cherry"]

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
// }

// Breack and Continue

for (let index = 0; index < 10; index++) {
    if (index === 5) {
        console.log("detecteve 5")
        break
    }
//   console.log(`index value is ${index}`);
    
}

// for (let index = 0; index < 10; index++) {
//     if (index === 5) {
//         console.log("detecteve 5")
//         continue
//     }
//   console.log(`index value is ${index}`);
// }
