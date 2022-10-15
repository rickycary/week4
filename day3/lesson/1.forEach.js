// Grabs address from data.js
const { dogs } = require('./data')
// Checks to see that data.js was pulled 
console.log(dogs)

//==================================================================
// For Loop:
// 1. Create function which has a for loop that console.logs each ELEMENT.
// Invoke the function using the dogs array as its parameter

// const forLooping = arr =>{
//     for(let i=0; i<arr.length; i+=1){
//         console.log('element', arr[1]);
//     }
// }

// forLooping(dogs)
//==================================================================

//==================================================================
// 2. Create a function which pushes the dog name into an empty array.
// After the for loop has finished, console.log the array which was previously empty and now has a list of names
// Invoke the function using the dogs array as its parameter

// const names = [];
// const forLoopNames = arr =>{
//     for(let i=0; i<arr.length; i+=1) {
//         names.push(arr[i].name)
//     }
//     console.log(names)
// }
// forLoopNames(dogs)

//==================================================================

//==================================================================
// const fido = {
//     name: 'Fido',
//     age: 5,
//     owner: 'Sam',
//     adopted: true,
//     breed: 'German Shepherd',
//     residence: 'Bronx'
// }
// console.log(fido.breed)
//==================================================================

//==================================================================
// 3. forLoopNames (dogs)
// const forEachElement = (arr) =>{
//     arr.forEach((element, index) => {
//         console.log(element)
//     })
// }
// forEachElement(dogs)
//==================================================================

//==================================================================
// 4. One step further adding index from #3
// const forEachElementAndIndex = (arr) =>{
//     arr.forEach((element, index) => {
//         console.log(element, index)
//     })
// }
// forEachElementAndIndex(dogs)
//==================================================================

//==================================================================
// Question
// Create a function which pushes the dog name into an empty array.
// After the forEach has finished, console.log the array which was previously empty and now has a list of names

// Invoke the function using the dogs array as its parameter

// const names = [];

// const forEachNames = (arr) => {
//     arr.forEach((element, index) => {
//         names.push(element.name);
//     })
//     console.log(names)
// }
// forEachNames(dogs)
//==================================================================

//==================================================================
// Using for each to push into an empty array using 2 properties
// Extra that student asked 

const nameAndAge = [];

const addingNameAndAge = (arr) => {
    arr.forEach((element, index) => {
        nameAndAge.push({ name: element.age, age: element.age})
    })

    console.log(nameAndAge)
}

addingNameAndAge(dogs)
//==================================================================

//==================================================================
