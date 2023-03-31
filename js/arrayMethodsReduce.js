// reduce()

const message = ["JavaScript ","is ","not ","fun."];

// function to join ear string elements , add them all to one string

function joinStrings(accumulator, currentValue){
    return accumulator + currentValue;
}

let joinedString = message.reduce(joinStrings,"initial value. ");

console.log(joinedString);


// sum of values of an array , its the same

const numbers = [ 1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue){
    return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer);

console.log(sum);

// sum using arrow function

let summation = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
    );

console.log(summation);


// subtracting values , also the same

const numbers2 = [1800, 50, 300, 20, 100];

// subtract all numbers form the first number
// since the first element is called as acumulator rather than currentValue
// 1800 - 50 - 300 - 20 - 100

let difference = numbers2.reduce(
    (accumulator, currentValue) => accumulator - currentValue
);

console.log(difference); // 1330


// function that subtracts all array elements from a given number
// 15000 - 1800 - 2000 - 3000 - 5000 - 500 

const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

let remaining = expenses.reduce(
    (accumulator, currentValue) => accumulator - currentValue , salary   // the intial value is the salary so salary - all expenses
);
console.log(remaining); // 2700



// remove duplicate items from array

let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

let uniqueAgeGroup = ageGroup.reduce(function(acumulator, currentValue) {
    if(acumulator.indexOf(currentValue) === -1){
        acumulator.push(currentValue);
    }
    return acumulator;
}, []);

console.log(uniqueAgeGroup);


























