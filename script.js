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

                console.log(twoSum(nums, target));
            }
        }
    }
}

const colors = ['red' , 'green' , 'blue'];

for (let i =  0; i < colors.length; i++) {
    console.log(colors[i]);
}


for (const color of colors) {
    console.log(color);
}


colors.forEach(function(color) {
    console.log(color);
});


const animals = ['cat' , 'dog' , 'rabbit'];

let i = 0;
while (i< animals.length) {
    console.log(animals[i]);
    i++;
}


// Function creating an array
function createNumberArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

const years = createNumberArray(1900, 2025);
console.log(years);


// Function filters and array
function getEvenNumbers(numbers) {
    const evens = [];
    for (const num of numbers) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    }
    return evens;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));