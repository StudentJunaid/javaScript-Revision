// scops in js  block scope {}
// var a = 100; // var is not block Scope so avoid this
// let b = 200;
// const c = 300;

if(true){
    // var a = 400;
    // let b = 500;
    // const c = 600;
    // console.log(b)
}

// console.log(a)
// console.log(b)
// console.log(c)

// ********************************************** nested Scops **********************************************

function one(){
    const userName = "JerryOp"

    function two(){
        console.log(userName)
        const Website = "Instagram"
    }

    // console.log(Website)
     two()
}

// one()

if (true) {
    const userName = "JerryOp"
    if (userName === "JerryOp") {
        const Website = " Instagram"
        // console.log(userName + Website)
        if (true) {
            // console.log(Website)
        }
    }
    // console.log(Website)
}

// console.log(userName)


// ************************************ Intersting ********************************************

// console.log(addOne(5))  // here we don't get any error

function addOne(num) {
    return num + 1
}


// console.log(addTwo(6)) // here we get error because we hold this function in variable
const addTwo = function(num){
    return num + 2
}
