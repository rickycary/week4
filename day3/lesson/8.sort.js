const { dogs } = require('./data.js');
// console.log (dogs)

// 1. Sort the dogs age ascendingAge order
const ascendingAgeOrder = dogs.sort((a, b) => {
    if(a.age < b.age){
        return -1
    } else if(a.age > b.age){
        return 1;
    } else {
        return 0
    }
});

console.log(ascendingAgeOrder)

// 2. Sort the dogs age descending order
const descendingAgeOrder = dogs.sort((a, b) => {
    if(a.age < b.age){
        return 1
    } else if(a.age > b.age){
        return -1;
    } else {
        return 0
    }
});

console.log(descendingAgeOrder)

//==========================================
