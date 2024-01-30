//const tinder = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

///nesting of objects inside object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//accessing nested objects
//? to check if it does exist eg 
//console.log(regularUser.fullname?.userfullname.firstname)
console.log(regularUser.fullname.userfullname.firstname)

//joining or merging elements..
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
///returns object containing whole object as element
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

///Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

const obj3 = Object.assign({}, obj1, obj2, obj4)

//using spread operator
// const obj3 = {...obj1, ...obj2}
console.log(obj3);

///some operations

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
