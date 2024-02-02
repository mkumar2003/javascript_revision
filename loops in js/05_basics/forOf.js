//for of loop
//object in for of loop can be anything

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greeting = "hello world!"
for (const greet of greeting) {
     console.log(greet);
}

//iterating maps using for of loop
//map stores value in order which it gets and avoid duplicates elements to come in map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const key of map) {
    console.log(key); //getting every element in array
}
for (const [key,value] of map) {
    console.log(key, "->",value); //non array format
}

//using for of loop on objects

const myObj = 
{
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key,value] of myObj) {
    console.log(key);
}
//output is "myObj is not iterable"
//conculsion we can use for of to iterate everything except object. 