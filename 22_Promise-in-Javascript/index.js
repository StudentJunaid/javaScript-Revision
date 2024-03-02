// const promise1 = new Promise((resolve,reject) =>{
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(() =>{
//         console.log("Async task is complete")
//         resolve()
//     },1000)

// })

// promise1.then(() =>{
//     console.log('promise resolved')
// })

// new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         console.log('new Promise')
//         resolve()
//     }, 1000);

// }).then(() =>{
//     console.log("2nd promise")
// })

// const promise3 = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve({username: "Cherry", email: "Cherry@gamil.com"})
//     },1000)
// })

// promise3.then((user) =>{
//    console.log(user)
// })

// const promise4 = new Promise((resolve,reject) =>{
//     let error = true;
//     if(!error){
//         console.log(resolve({username: "merry", email:"merry@gmail.com"}))
//     }else{
//         console.log(reject("something went wrong"))
//     }
// })

// promise4
// .then((user) =>{
//     console.log(user)
//    return  user.username
// })
// .then((username) =>{
//     console.log(username)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() => console.log("Finally Promise is either resolve or reject"))



// const promise5 = new Promise((resolve,reject) =>{
//     let error = true;
//     if(!error){
//         console.log(resolve({username: "JavaScript", email:"js@gmail.com"}))
//     }else{
//         console.log(reject("something went wrong"))
//     }
// })

// // async function consumedpromise5 (){}

// const consumedpromise6 = async () =>{
//     try{
//         const response = await promise5
//         console.log(response)
//     } catch (error){
//        console.log(error)
//     }
// }

// consumedpromise6()


//  const Fetching = async ()  =>{
//    try {
//     const response =  await fetch("https://randomuser.me/api/")
//     const data = await response.json()
//     console.log(data)
//    } catch (error) {
//     console.log(error)
//    }
//  }

//  Fetching()


// fetch("https://randomuser.me/api/")
// .then((response) =>{
//    return response.json()
// })
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) =>{
//     console.log(error)
// })