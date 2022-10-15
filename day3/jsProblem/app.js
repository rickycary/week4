// Fibonacci Number (Leet Code)
// https://leetcode.com/problems/fibonacci-number/
// Example with a foor loop 

let arr = [100,102,103,104,105,106,50]
let tar = 153
var twoSum = function(nums, target){

    for (i=0; i<=nums.length; i+=1){
        // First console log
        // console.log(nums[i])  
        for (let j = i+1; j < nums.length; j+=1){

            // Second console log
            // console.log(' 1st grabbed item: ' + nums[i] + '; 2nd item: ' + nums[j] + ';')

            if(target === nums[i] + nums[j]){
                console.log("Ding Ding")
            } else {
                console.log("Move on loser")
            }
            // Third console log
            console.log(nums[i], nums[j])

        }
    }
}

twoSum(arr, tar)

