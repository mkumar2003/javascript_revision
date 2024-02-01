const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`);
    }
}
///When used in an object method, this refers to the object or current context 
user.welcomeMessage()
user.username="manish"
user.welcomeMessage()

///using this at standalone in node environment
///When used alone, this refers to the global object.
// Because this is running in the global scope.
// In a browser window the global object is [object Window] but in node it returns an empty object

console.log(this);

///In a function, the global object is the default binding for this.
///here this.username doesnt work the same way it return undefined
function chai(){
    let username = "sunil"
    console.log(this)
}
chai()

//arrow fucntion in js

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//2nd method
// const addTwo = (num1, num2) =>  num1 + num2

//3rd method
// const addTwo = (num1, num2) => ( num1 + num2 )

//returning objects through arrow function
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))