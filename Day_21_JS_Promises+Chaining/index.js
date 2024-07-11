// // let promise = new Promise((resolve, reject) => {
// //     console.log('I am a promise');
// //     reject('error')
// // });
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data',id);
            resolve('#sucess'); // Resolve the promise after the setTimeout
           // reject('network error');
        }, 5000); // Adjust the timeout value as needed
    });
}

//calback function

function getData1(id,getNextData){
    setTimeout(()=>{
        console.log('data',id);
        if(getNextData){
            getNextData();
        }
    },5000);
}

//callback hell

getData1(1, (firstData, firstId) => {
    console.log(firstData, firstId);
    
    getData1(2, (secondData, secondId) => {
        console.log(secondData, secondId);
        
        getData1(3, (thirdData, thirdId) => {
            console.log(thirdData, thirdId);
            
            getData1(4, (fourthData, fourthId) => {
                console.log(fourthData, fourthId);
                
                // Add more nested callbacks as needed
            });
        });
    });
});


//promise chaining
// let p1 = getData(1); // Corrected function name from getData1 to getData
// getData(1).then((data1) => {
//     return getData(2);
// }).then((data2) => {
//     return getData(3);
// }).then((finalData) => {
//     console.log(finalData);
// }).catch((error) => {
//     console.log('Error:', error);
// });


// // Step 1: Making the Promise
// const deliveryPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const packageIsDelivered = true; // Simulating successful delivery
//         if (packageIsDelivered) {
//             resolve(); // Package delivered
//         } else {
//             reject(); // Package lost or delayed
//         }
//     }, 3000); // Assuming delivery takes 3 seconds
// });

// // Step 2: Waiting for the Promise to be Fulfilled or Rejected
// deliveryPromise
//     .then(() => {
//         console.log('Package delivered! You can celebrate!');
//     })
//     .catch(() => {
//         console.log('Something went wrong with the delivery. You\'re disappointed.');
//     });

