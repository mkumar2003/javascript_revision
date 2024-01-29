let date = new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());

//creating your own date
//month start from 0 in case of single digit
// var myCreatedDate = new Date(2023,0,1)
// console.log(myCreatedDate.toLocaleDateString())
// var myCreatedDate = new Date(2023,01,11)
// console.log(myCreatedDate.toLocaleDateString())
// var myCreatedDate = new Date(2023,0,1,5,2)
// console.log(myCreatedDate.toLocaleString())
// var myCreatedDate = new Date("2023-10-14")
// console.log(myCreatedDate.toLocaleDateString())


//timestamp : time elpased till now from 1/01/1970
let timestamp = new Date().getTime();
console.log(timestamp);
let newdate = new Date(timestamp) //timestamp to date
console.log(newdate.toLocaleString());

//to get timestamp of a given date for comparsion for in cases of quizzez.
// let newtimestamp = myCreatedDate.getTime();
// console.log(newtimestamp);

//converting timestamp which is in millisecond to second
let timestamp2 = (Math.floor(Date.now()/1000))
console.log(timestamp2);        //in seconds

