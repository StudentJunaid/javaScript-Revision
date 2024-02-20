// functions

function saymyname(){
    console.log("J")
    console.log("E")
    console.log("R")
    console.log("R")
    console.log("Y")
}
// saymyname()

// function addTwonumber(number1,number2){
//     console.log(number1 + number2)
// }


function addTwonumber(number1,number2){
    // let result = number1 + number2 
    // return result
    return number1 + number2
}


const result = addTwonumber(2,5)
// console.log("Result: ",result)

function userloggedIn(username = "jerry"){
    if(!username){
        // console.log("please enter a user code")
        return
    }
    return `${username} just logged in`
}

// console.log(userloggedIn('jerry'))
// console.log(userloggedIn())


function calculatecardprice(val1,val2,...num1){
    return num1
}

// console.log(calculatecardprice(200,300,400,500,600))

const user = {
    username: "jerry",
    prices: 999
}

function handleObject(anyobject){
    //   console.log(`username is ${anyobject.username} and doller is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username: "same",
    price: 1000
})

const myarray = [200,300,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myarray))