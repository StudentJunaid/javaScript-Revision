function Username(username){
    this.username = username
    console.log("called");
}



function newUser(username,email,password){
    Username.call(this, username)
    this.email = email;
    this.password = password;
}

const chai = new newUser("junaid","jerry@gmail.com",123)

console.log(chai);