
let array = [250, 645, 300, 900, 50];

const discountRate = 10;

//250-10% -> 225

for (let index = 0; index < array.length; index++) {
    
    let discountAmt = (array[index]/discountRate);

    array[index] = (array[index]-discountAmt);
    
}


console.log(array);