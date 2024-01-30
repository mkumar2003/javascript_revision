function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

/// using default username if not passed by user
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())

///in case of shopping cart we dont know how much quantity will be selected by user so for that we cannot predict no of parameters required so we use spread opera
///it retuns an array containing all values.

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

///another way
function calculateCartPriceNew(val1,val2,...num1){
    return num1
}
///here val1=200 ,val2=400 , num1=[500,2000]
console.log(calculateCartPriceNew(200, 400, 500, 2000))

///passing objects in function

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

/// we can directly pass object without declaring first

// handleObject({
//     username: "sam",
//     price: 399
// })

///passign array into function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

///passing values into array directly.
console.log(returnSecondValue([200, 400, 500, 1000]));

