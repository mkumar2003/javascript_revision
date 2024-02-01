//in javascript every thing is either truthy or falsy which is decided without any prior calculations.
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){},all other value other than falsy

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//how to detect empty object.
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
//The Nullish Coalescing Operator (??) is a feature introduced in ECMAScript 2020 (ES11) to provide a concise way to handle default values for cases where a variable is null or undefined. 
//syntax : 
//const result = variableToCheck ?? defaultValue;

let val1;
// val1 = 5 ?? 10  it takes whichever it get earlier
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20   //takes earliest value



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")