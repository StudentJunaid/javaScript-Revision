class User  {
     constructor(username){
        this.username = username
     }

     logMe(){
        console.log(`username ${this.username}`);
    }

   static createId(){
        return '123'
    }
}


class Teacher extends User{
    constructor(username,email,pass){
        super(username)
        this.email = email
        this.pass = pass
    }
}

const cherry = new Teacher("jerry","chai@gmail",123)

console.log(cherry);
console.log(cherry.logMe());
// console.log(cherry.createId()); // static rook deta hai value bhjna