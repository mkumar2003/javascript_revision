const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  //it creates nested arr
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//push appends value in same arr

//using concat operation
//it return an new arr containing concat of two arrays
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//using spread operator
//advtage of spread it can concatnate mutliple arrays at same time . 
const new_heroes = [...marvel_heros,...dc_heros]

///resolving complex array
///flat(number of depth to resolve)
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

//tranforming strings,objetcs into array
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));