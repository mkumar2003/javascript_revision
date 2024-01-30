//var c have scope problem it can be used outside the scope as well
///from my practice it does not like this in function
var c = 10
if (true) {
    var c = 50
}
console.log(c);
///value changed in c should remain in if block but with use of var it changes global value

///scope example : 
///trick : chota baccha bade ki ice cream le sakta hai par bada chote ki nhi le sakta.
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
     two()
}

one()


///hoisting basics or introduction
console.log(addone(5))

function addone(num){
    return num + 1
}

///in this declaration hoisting doesn't works
addTwo(5)
const addTwo = function(num){
    return num + 2
}