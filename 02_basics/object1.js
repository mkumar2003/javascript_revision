///two ways to create objects
/// singleton : A Singleton is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance.( using constructors) eg: object.create()

/// literals : Object literals are a convenient way to create objects in JavaScript. They allow you to define and create an object in a single statement, using curly braces {}

///creating symbol in js
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",    //to use key in object.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
///here instances of objects are stored in key value pair , keys are internally converted into strings.

///ways of accessing elements
//1) using . dot operator
console.log(JsUser.email)
//2) using [""]
console.log(JsUser["email"])

///why two methods , bcz in case of any object declaration like "fullname" = "sam roy" where is explicitly written in string then . operator cannot access it . 
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]); //for access symbol

// Object.freeze(JsUser)
///after freezing element its value cannot be changed or altered though it does not give any errors

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    //this is called string interpolation.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


    

