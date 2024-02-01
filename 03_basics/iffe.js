//iffe stands for immediate invoked function expression
//used to solve two problems firstly executing the function immediatly like in case of file having a fun. for establishing databse connection when it is created and secondly no pollution from global scope

//syntax : () (); , [;]for telling that it is completed.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB TWO CONNECTED`);
} )();              //semi colon is must after iffe


//iffe with parameter
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');