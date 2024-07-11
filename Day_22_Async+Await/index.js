//revision
//Dilivery example
//async await keyword
//iife
//conclusions

//Promise - 1
const deliveryPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isPackageDelivered = true; // Simulate successful delivery
      if (isPackageDelivered) {
        resolve("Rahul, here is your iPhone! "); // Clear and positive message
      } else {
        reject(
          "We're sorry for the delay. Your package may be lost or facing an internal error. We'll investigate and keep you updated. "
        ); // Informative error message
      }
    }, 4000); // Simulate Amazon delivery time
  });
};

//Promise -2
const flexPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const everyoneHasIphone = false; // Simulate a condition
      if (!everyoneHasIphone) {
        resolve("Tujva bhava chi hawa aahe"); // Clear and positive message
      } else {
        reject("Oops! Maybe your flex came a bit too early. "); // Informative error message with a lighthearted tone
      }
    }, 4000); // Simulate an arbitrary delay
  });
};

//Async Function - Function ko bata rhe ho ki andar aysnchrounous kaam karna hai
async function rahulPlan() {
  try {
    const diliveryResult = await deliveryPromise(); //Mi tujya sathi thambnar
    console.log(diliveryResult);
    const flexResult = await flexPromise(); //Await keyword fakt async keyword sobhat chalto
    console.log(flexResult);
  } catch (error) { //Error handling apan try-catch cha use karta
    console.log(error);
  }
}


//Anomynous - Prefered
//IIFE

//Apan tyla invoke kartat nahi to automatically call hoto - He fakt 1 time use karu shakto karan yecha kahi naav nahi aahe

// (async function(){
//     try {
//         const diliveryResult = await deliveryPromise(); //Mi tujya sathi thambnar
//         console.log(diliveryResult);
//         const flexResult = await flexPromise();
//         console.log(flexResult);
//       } catch (error) {
//         console.log(error);
//       }
// }());



