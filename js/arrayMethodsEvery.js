// every() 

// the every method checks if all array elements pass the given test function

// function that checks wether the age is 18 or above

function checkAdult(age){
    return age >= 18;
}

const ageArray = [34,34,20,26,12];

// checks if all array element pass the checkAdult() function

let check = ageArray.every(checkAdult);

console.log(check);


// check if array elements are even 

// function that checks wether all the array elements are even or not

function checkEven(num){
    return num % 2 === 0;
}

const numbers = [2,4,6,7,8];

let check2= numbers.every(checkEven);

console.log(check2); //falses

// every with arrow functions

let nums = [1,2,3,4];

// use arrow function with every()

let result = nums.every(element => element < 6);
console.log(result); // true


