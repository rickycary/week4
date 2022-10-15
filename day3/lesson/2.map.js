const { dogs } = require('./data.js');
console.log (dogs)

//==================================================================
// map()
// 1. Create a function that return an array of dog names using the map method.
// Invoke the function using the dogs array as its parameter

const mapNames = (arr) => {
    let names = arr.map((element, index) => {
        return element.name
    })
    return names
}
console.log(mapNames(dogs))
//==================================================================

//==================================================================
// map()
// 2. Create a function that return an array objects with hold the property dog names and age using the map method.
// Invoke the function using the dogs array as its parameter

const mapNamesandAges = (arr) => {
    let namesAndAges = arr.map((element, index) => {
        return {name: element.name, age: element.age}
    })
    return namesAndAges
}
console.log(mapNamesandAges(dogs))
//==================================================================

//==================================================================
// 3. Create a function that adds an 'id' property using the index arguement using the map method.
// Invoke the function using the dogs array as its parameter

// const obj = {name: 'odell beckham jr'}
// obj.position = 'wide receiver'

// console.log(obj)
// //{ name: 'odell beckham jr', position: 'wide receiver' }

//==================================================================

// const addingIds = (arr) => {
//     let addedId = arr.map((element, index) => {
//         element.id = index + 1;
//         return element;
//     });
//     return addedId
// }
// console.log(addingIds(dogs))


//==================================================================

const nate = (arr) => {
    let sports = arr.map(element => {
        return element;
    })

    return sports
}

console.log(nate(dogs))