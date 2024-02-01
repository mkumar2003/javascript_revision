//it is better than else if statements
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"   //can use other datatypes

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

//if break statement is missing it executes all condition after match condition except default condition