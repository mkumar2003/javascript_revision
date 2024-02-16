const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

//console.log(user.username)
console.log(user.getUserDetails());
//console.log(this);   //returns an empty object in node environment. 

//in case if we want to create data of another user we need to create another object as chain goes on instead we can use constructor function (eg.new)
//eg like promiseOne = new Promise()
//        date = new Date()

//here new is an constructor function which allow us to create multiple instances of a single object , also us to create its own context for each new instance.

//some imp points on new keyword
// The new keyword creates a new empty object and calls the constructor function
// The constructor function packs arguments inside it and injects them into the object
//function have its own global execution context

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

//without using new function
//values given in usertwo overwrites values is userOne
// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)

//with new fucntion
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne);
console.log(userTwo);

//some other properties
console.log(userOne.constructor);
