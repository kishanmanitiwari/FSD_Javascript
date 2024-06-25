
//Normal Function
function countVowels(inpString) {
    let count = 0;

   for(const element of inpString){
    if(element==='a' || element==='e' || element==='i' || element==='o' || element==='u'){
        count++;
    }
   }

   return count;
    
}

//Arrow Function
const countNameVowels = (inpString) => {
    let count = 0;

   for(const element of inpString){
    if(element==='a' || element==='e' || element==='i' || element==='o' || element==='u'){
        count++;
    }
   }

   return count;
    
}


console.log('Normal Function - ',countVowels('Rohini')); //3

console.log('Arrow Function =>',countNameVowels('Sakshi Mane')); //2

