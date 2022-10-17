const { dogs } = require('./data.js');
// console.log (dogs)

// 1. What is the cumulative age of all the dogs that aren't adopted
const cumulativeAgeNotAdopted = dogs.reduce((acc, element, index) => {
    return element.adopted ? acc : acc + element.age;
}, 0)
console.log(cumulativeAgeNotAdopted)

// 2. I want to write a sentence that will name all of the dogs
const listNames = dogs.reduce((acc, element, index) => {
    if(index === 0){
        acc += `I have a dog named ${element.name}`
    } else {
        acc += `and a dog named ${element.name}`
    }
    return acc;
}, '')

console.log(listNames)