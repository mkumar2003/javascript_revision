//creating promises

const promiseOne = new  Promise(function(resolve , reject){
    //do any async taks
    //DB calls
    //network request
    setTimeout(() => {
        console.log("Async task is completed")
        resolve()         //used to connect with then block
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise one consumed");
})

//another method

new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("async task 2 completed.");
        resolve()
    }, 1000);
}).then(function(){
    console.log("promise2 consumed")
})

//passing parameters in resolve

const PromiseThree = new Promise(function(resolve , reject){
    setTimeout(() => {
        resolve({username : "manish" , email : "chai@example.com"})
    }, 1000);
})
PromiseThree.then(function(data){
    console.log(data);
    console.log("Promise three completed.");
})

//chaining in promises
const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username : "manish" , email : "chai@example.com"})
        }
        else{
            reject("ERROR Something Went Wrong!!")
        }
    })
})
PromiseFour.then(function(user){
    return user.username   //return values to lower chains
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( () => console.log("the promise is either resolved or rejected."))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
//using async instead of then
//async by default do not handle errors so we use try catch block..

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//making connection using fetch

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
 //now responce have output in string format so we convert it into json format which also takes time so we use await to wait till its completion
        const data = await response.json() //convert to json
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

//same using then and catch
//here first this is executed first and then it moves downwards
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))