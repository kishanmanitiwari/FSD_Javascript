//revision
//async
//await
//iife
//conclusions

// function greet(){
//     setTimeout(()=>{
//         console.log('Hello,Everyone');
//     },3000)

// }


// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('weather data');
//             resolve('status code:200')
//             // reject('some error')

//         }, 4000);
//     })
// }


// async function getWeather() {
//     await api(); //promise api - resolve , I ll wai
//     console.log('I am second statement');

// }

//API - id > Value

function getData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',id);
            resolve('Sucess')//promise - fulfil
         //  reject('Network error , Try Again')
        },3000);
    })
 
}

async function getDataByAPI(){
    await getData(1); //This is first
    await getData(2); //This is second
}


///IIFE -> RUNS immiditely - No need to call ur

(async function(){
    await getData(1); //This is first
    await getData(2); //This is second
})();


