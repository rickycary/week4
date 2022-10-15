// Fibonacci solution
// https://leetcode.com/problems/fibonacci-number/


let arr = [100,102,103,104,105,106,50]
let tar = 153

var fib = function(n) {
    var collection = [0, 1];

    for(let i = 2; i<= n; i+=1){
        collection.push(collection[i-1] + collection[i-2]);
    }
    return collection[n];

}