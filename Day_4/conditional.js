

//Conditional Statement - If Statement

// let age = 18;

// if (age>=18 && age<=60) {
//    // var myName = 'rohan'
//     console.log('You can vote');
// }


// //console.log('You cannot vote');

// IF-ELSE


let day = 4;
let rest = false;
//1-Mon
//2-Tue
//7- Sunday

if (day>=1 && day<=5) {
    console.log('Go to office');
} else {
    console.log('Its Weekend, Take rest');
    rest = true;
}

//ELSE-IF
//  let age = 19;

//  if(age>=18 && age<=60){
//     console.log('Adult');
//  }else if(age>60){
//     console.log('Senior Citizen');
//  }else if(age==19){
//     console.log('You are 19');
//  }
//  else{
//     console.log('Child');
//  }

 //Ternary Opearator

let myAge = 19;

let ans = myAge>18 ? 'adult' : 'not adult';

console.log(ans);

