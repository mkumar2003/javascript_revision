//for in loop
//it just returns the keys of object,array
//it can be used to iterate over objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//iterating array using for in loop

const myArray = ["js", "rb", "py", "java", "cpp"]

//it just returns the key of array
for (const key in myArray) {
    console.log(key);
}
//getting values along with ley
for (const key in myArray) {
    console.log(`${key} value is : ${myArray[key]}`);
}


//it cannot be used for iterating maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
//it produces no output.bcz map is not iterable this way