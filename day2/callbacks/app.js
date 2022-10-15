// setTimeout(
//     ()=>{
//         console.log('hi');
//     },
//     2000
// );

// setInterval(
//     ()=> {
//         console.log('hi');
//     },
//     2000
// );

// const iceCreams = [
//     'Vanilla',
//     'Chocolate',
//     'Strawberry', 
//     'Rock Road'
// ];
// iceCreams.forEach(
//     (currentElement)=> {
//         console.log(currentElement);
//     }
// );




// const henchman = () => {
//     console.log("I'm the henchman")
// }
// const mobboss = (employee) => {
//     console.log(employee)
// }

// mobboss(henchman)



// here is an example of logging out the fact that the henchman is a function
// const henchman = ()=>{
//     console.log("Right-o boss");
// }

// const henchman2 = ()=>{
//     console.log("I am number 2");
// }

// const mobboss = (employee)=>{
//     console.log("Go set a restaurant on fire");
//     employee();
// }
// mobboss(henchman)
// mobboss(() => {
//     console.log('Right-o boss')
// })
// mobboss(henchman2);



// const mobboss = (employee)=>{
//     console.log("I'm the boss");
//     employee();
// }

// // mobboss(() =>{
// //     console.log("I'm the thief")
// // })


// mobboss(() =>{
//     console.log("I'm the arsonist")
// })

// function receivesACallBack(cb){
//     console.log(cb())
// }

// function callBack1(){
//     return1
// }

// // // receivesACallBack(callback1)
// // receivesACallBack(() =>{
// //     return 5
// // })

// receivesACallBack(callBack1()) // syntax error


//===================================
// const iceCreams = [
//     'vanilla',
//     'chocolate',
//     'strawberry',
//     'rocky road',
//     'cookie dough'
// ];
// iceCreams.forEach(brynne => {
//     console.log(brynne)
// })
//===================================

//=====================================
const iceCreams = [
    'vanilla',
    'chocolate',
    'strawberry',
    'rocky road',
    'cookie dough'
];

const flavor = iceCreams.map(flavor =>{
    return flavor + ' ice cream'
})

console.log(flavor)