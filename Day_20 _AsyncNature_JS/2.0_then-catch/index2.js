//Revision on async vs sync
//Callback hells
//Intro to promise
//then & catch method
//promise chaing

//calback function

//aysnc code - API
// function getData1(id,getNextData){
//     setTimeout(()=>{
//         console.log('data',id);
//         if(getNextData){
//             getNextData();
//         }
//     },5000);
// }

//callback hell

// getData1(1, (firstData, firstId) => {
//     console.log(firstData, firstId);
    
//     getData1(2, (secondData, secondId) => {
//         console.log(secondData, secondId);
        
//         getData1(3, (thirdData, thirdId) => {
//             console.log(thirdData, thirdId);
            
//             getData1(4, (fourthData, fourthId) => {
//                 console.log(fourthData, fourthId);
                
//                 // Add more nested callbacks as needed
//             });
//         });
//     });
// });


// let lecPromise = new Promise((resolve,reject)=>{
//     //resolve('I kept my promise');
//     reject('Some error')
// })

//API - id > Value

function getData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',id);
            resolve('Sucess')//promise - fulfil
           // reject('Network error , Try Again')
        },3000);
    })
 
}


// getData(1).then((res)=>{ //promise is resolved
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//promise chaining

getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3);
}).catch((err)=>{
    console.log(err);
})











// Step 1: Making the Promise
// const deliveryPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const packageIsDelivered = false; // Simulating successful delivery
//         if (packageIsDelivered) {
//             resolve('Bhai jee le apni zindagi'); // Package delivered
//         } else {
//             reject('Some error occured'); // Package lost or delayed
//         }
//     }, 3000); // Assuming delivery takes 3 seconds
// });

// // // Step 2: Waiting for the Promise to be Fulfilled or Rejected

// let ans = deliveryPromise
//     .then((res) => { //diliver done
//         console.log('Package delivered! You can celebrate!');
//         console.log(res);
//     })
//     .catch((err) => { //diliver unsucessful
//         console.log('Something went wrong with the delivery. You\'re disappointed.');
//         console.log("promise returedme", err);
//     });
