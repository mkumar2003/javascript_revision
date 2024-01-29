let name = "manish"
let score = 50
//latest method to write string
console.log(`${name} scored ${score} points`)

//another method to declare a string
const gameName = new String("mario-2023-reserved")
console.log(gameName);
console.log(gameName,__proto__);

//various prototypes in strings
console.log(gameName.length);
console.log(gameName.slice(-8,-5))

//url checking or correction
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','--'))

console.log(url.includes('https'));

console.log(gameName.split('-'));