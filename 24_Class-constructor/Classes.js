// ES6

// class user {
//     constructor(username, email, pass){
//         this.username = username
//         this.email = email
//         this.pass = pass
//     }

//     passencrypt(){
//       return  console.log(`${this.pass}abc`)
//     }

//     userchange(){
//         return console.log(`${this.username.toUpperCase()}`);
//     }
// }

// const chai = new user("jerry","jerry@gmail",'123')

// console.log(chai.passencrypt());
// console.log(chai.userchange());

// behind the scene

// function user(username, email, pass) {
//     this.username = username
//     this.email = email
//     this.pass = pass
// }


// user.prototype.passencrypt = function(){
//     return console.log(`${this.pass}abc`);
// }

// user.prototype.userchange = function(){
//     return console.log(`${this.username.toUpperCase()}`);
// }

// const tea = new user("cherry","cheery@gmail.com",678)

// console.log(tea.passencrypt());
// console.log(tea.userchange());