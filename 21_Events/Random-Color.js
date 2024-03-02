// generate a random color

// function generate_Color() {

//     document.getElementById("start").addEventListener('click', function () {
//       const bodyColor =  setInterval(() => {
//             const randomNum = Math.floor(Math.random() * (16777215));
//             const FinalCode = "#" + randomNum.toString(16)
//             console.log(FinalCode)
//             console.log("hi")
//              document.body.style.backgroundColor = FinalCode;
//         },1000)
//         document.getElementById("stop").addEventListener('click', function () {
//               clearInterval(bodyColor)
//         })
//      })

// }


// console.log(generate_Color())

// Method 2
const colorChange = () =>{
    const hex = "0123456789ABCDEF"
    let color = "#";
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId; 

const startColor = () =>{
   
   intervalId = setInterval(() =>{
        document.body.style.backgroundColor = colorChange();
    },1000)
   
}

const stopColor = () =>{
    clearInterval(intervalId)
    intervalId = null;
}




document.getElementById("start").addEventListener('click', startColor)

document.getElementById("stop").addEventListener('click', stopColor)

