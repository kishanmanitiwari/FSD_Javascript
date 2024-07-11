//Creating a simple promise

// function rahulPromise() {
//     return new Promise((resolve,reject)=>{
//         console.log("tere ko jo karna hai kar le");
//         reject("thenga");
//     })
// }

//Rahul - Amazon(Promise) - iphone

//Step 1- Making a promise

const deliveryPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isPackageDilivered = true;
    if (isPackageDilivered === true) {
      resolve("Rahul here is your iphone"); //Dilivery sucessfull
    } else {
      reject("Sorry for delay"); //Package lost or internal error
    }
  }, 4000); //Amazon dilivery karne mein 4 sec lagte hai
});

const flexPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const iphoneSabkePassHai = false;
    if (iphoneSabkePassHai === false) {
      resolve("Teri bhai ki hawa");
    } else {
      reject("Moye Moye Ho Gya");
    }
  }, 4000);
});

// //Step 2: Waiting for promise to be resolved or rejected //promise chainig

deliveryPromise
  .then((deliveryResult) => {
    console.log("Delivery Promise resolved:", deliveryResult);
    // You can perform operations on the delivery result here
    return flexPromise; // Return the next promise in the chain
  })
  .then((flexResult) => {
    console.log("Flex Promise resolved:", flexResult);
    // You can perform operations on the flex result here
  })
  .catch((error) => {
    console.error("An error occurred:", error);
    // Handle errors from either deliveryPromise or flexPromise here
  });


// // --Promise Chaining

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { message: "Data fetched from " + url };
//       resolve(data); // Simulate successful data retrieval
//     }, 1000);
//   });
// }

// function processData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processedData = data.message.toUpperCase();
//       resolve(processedData); // Simulate data processing
//     }, 500);
//   });
// }

// function displayData(processedData) {
//   console.log("Processed data:", processedData);
// }

// fetchData('kishan') //'https://example.com/api/data'
//   .then(data => processData(data))
//   .then(processedData => displayData(processedData))
//   .catch(error => console.error('Error:', error));