const { dogs } = require('./data.js');
// console.log (dogs)

//==================================================================
// 1. Create an array with only dogs under 5

const underFive = dogs.filter((element, index) => {
    return element.age < 5;
})
console.log(underFive)
//==================================================================

//==================================================================
// 2. Create an array with dogs that are in the even index position

const even = dogs.filter((element, index) => {
    return index % 2 === 0;
})

console.log('Even Dogs ', even)
//==================================================================

//==================================================================
// 3. Create an array with dogs that are in the odd index position
const odd = dogs.filter((element, index) => {
    return index % 2 !== 0;
})

console.log('Odd Dogs: ', odd)
//==================================================================

//==================================================================
// 4. Create an array with dogs with no owners

const noOwner = dogs.filter((element, index) => {
    return !element.owner
})

console.log(noOwner)
//==================================================================

//==================================================================
