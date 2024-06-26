
let array = [1,2,3,4];

//sum of all n elements

const output = array.reduce((prev,curr)=>{
    return prev<curr ? prev:curr;
})

console.log(output);