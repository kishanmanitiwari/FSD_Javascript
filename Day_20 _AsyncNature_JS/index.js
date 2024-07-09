//Async vs Await
//Set Time-out
//Amazon Example 
//Restraunt Example
//Callback Example


// //Sync Code
// console.log("Hello");
// console.log("Good");
// console.log("Evening");

// console.log('UserId');
// console.log('Password');

// function server(params) {
//     console.log('User Authenticated');
// }

// setTimeout(()=>{
//     console.log('User Authenticated');
//      },9000);

// console.log('Logged In');


//Callback

function add(a,b) {
    console.log(a+b);
}

function calculator(a,b,callback) {
    callback(a,b);
}

calculator(2,3,add);