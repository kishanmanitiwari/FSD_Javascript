
let btn = document.querySelector('.btn');

let firstDiv = document.querySelector('#firstDiv');

// btn.ondblclick = ()=>{
//     console.log('I doubled click');
// }

// btn.ondblclick = (e)=>{
//     console.log(e);
    
// }


// btn.addEventListener('click',(e)=>{
//     console.log('I got clicked');
//     console.log(e.target);
// });

// btn.addEventListener('ondblclick',(e)=>{
//     console.log('I got clicked');
//     console.log(e.target);
// });


// firstDiv.addEventListener('mouseover',()=>{
//     console.log('Mouse is inside the div');
// })


function handler1() {
    console.log('Single Click');
}


function handler2() {
    console.log('Double Click');
}

btn.addEventListener('click',handler1);

btn.removeEventListener('click',handler1);

