

const array = [1,2,4,5];

//For each


let sqaure = array.map((elem,index,arr)=>{
    console.log(elem);
    return index;
})

console.log(sqaure);