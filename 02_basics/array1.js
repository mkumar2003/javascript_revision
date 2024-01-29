// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

///alternate way to declare array need not to do []
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)   ///adds element at first position
// myArr.shift()      ///remove elemnt from first postio

// console.log(myArr.includes(9)); ///checks if element exist if not return false else true
// console.log(myArr.indexOf(3));   ///if element is present gives its index either -1.

 const newArr = myArr.join() ///Adds all the elements of an array into a string (data type of newArr changes to string.)

// console.log(myArr);
// console.log( newArr);


// slice, splice

///slice() is used for creating a new array by extracting a portion of the original array, while splice() is used for modifying the original array by adding, removing, or replacing elements at specific positions.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3,9,10) ///delete element from index 1 till 3 and replace with 9,10
console.log("C ", myArr);
console.log(myn2);