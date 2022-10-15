const { dogs } = require('./data.js');
// console.log (dogs)

//================================================
// 1. Find the first element where Same is the owner 
const firstElementWhereSamIsOwner = dogs.findIndex((element, index) => {
    return element.owner === "Sam"
})
console.log(firstElementWhereSamIsOwner)
// return 0

// 2. Find the first element where the dog lives in Jersey
const firstElementWhereInJersey = dogs.findIndex((element, index) => {
    return element.residence === 'Jersey';
})
console.log(firstElementWhereInJersey)
// return -1

// 3. Find the first element where Sam is the owner and lives in Brooklyn
const SamBrooklyn = dogs.findIndex((element, index) => {
    return element.owner === 'Sam' && element.residence === 'Brooklyn';
})

console.log(SamBrooklyn)
// return 4