

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//shift

let removedCompany = companies.shift();

//splice

companies.splice(companies.indexOf("Uber"),1,"OLA");


//push

companies.push('Amazon');


console.log(companies);