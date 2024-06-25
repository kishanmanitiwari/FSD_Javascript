
function getMilk(litre,money) {
    console.log('Wake Up');
    console.log('Go To store');
    console.log(`Buy ${litre} L of milk`);

    const totalCost = litre*50;

    const change = money-totalCost;

    return change;


}

const mummy = getMilk(2,125);

console.log(mummy);