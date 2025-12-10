// Loops   
const fruits =  ['grapes', 'bananas' , 'tangerines' , 'pineapples'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// Double Nested Loops

nums = [3, 6, 9, 12];
target =  12 

const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [ i, j];
            }
        }
    }
}
console.log(twoSum(nums, target));