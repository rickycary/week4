const { dogs } = require('./data.js');
// console.log (dogs)

//==================================================================

// 1. Test if the array has all dogs are adopted

const isEveryDogAdopted = dogs.every((element, array) => {
    return element.adopted
})

console.log(isEveryDogAdopted)
// return false
//==================================================================

//==================================================================
// 2. Test is the array has dogs over the age of zero
const dogOverZero = dogs.every((element, index) => {
    return element.age > 0
})

console.log(dogOverZero)
// return true
//==================================================================
