 //Fetech API 
//API = 'https://api.api-ninjas.com/v1/jokes'

var para = document.querySelector(".radmonText");

async function getJoke(params) {
    try {
        const result = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single'); //Returns me Promise Object

        console.log(result);

        const jsObject = await result.json();//Promise Object - Json Extact - JS object

        para.innerText = jsObject.joke;

    } catch (error) {
        console.log("Error Fetching Data");
        console.log(error);
    }
    
}

