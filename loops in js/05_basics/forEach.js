//for each loop
//it is by deafult injected with array in their prototype
//uses callback function which has no name
//forEach have three parameteres
//item , index , arr

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(iterator){
//        console.log(iterator);
// })

//using arrow function
coding.forEach( (i)=>{
     console.log(i);
})

//we can pass function in forEach as well

function Printmessage(item)
{
    console.log(item);
}

coding.forEach(Printmessage)  //do not call just give reference

//using all three parameters of forEach
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

//decoding array of objects which is mostly used in real life using forEach loop
//   eg -- [ {} , {} , {} ]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
