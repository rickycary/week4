const { dogs } = require('./data.js');
// console.log (dogs)

// 1. Test if the array has at least one dog that lives in brooklyn (T/F)
const livingInBrooklyn = dogs.some((element, index) => {
    return element.residence === 'Brooklyn';
})
console.log('Are there any dogs living in Brooklyn? ', livingInBrooklyn) //return True 

// 2. Test if the array has at least one dog that lives in New Jersey (T/F)
const livingInJersey = dogs.some((element, index) => {
    return element.residence === 'New Jersey';
})
console.log('Are there any dogs living in New Jersey? ', livingInJersey)
// return False 