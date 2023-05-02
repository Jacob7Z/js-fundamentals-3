// findIndex()

// returns the index of the first array element that satisfies the test function


let numbers = [2,8,1,3,4];

// function that returns odd number
function isOdd(element){
    return element % 2 !== 0;
}

let firstOdd = numbers.findIndex(isOdd);

console.log(firstOdd);




// findIndex() method

// function that returns even number
function isEven(element){
    return element % 2 == 0;
}

// defining an array of integers 
let numbersArr = [1,45,8,98,7]; 

let firstEven = numbersArr.findIndex(isEven);

console.log(firstEven);




// findIndex() with arrow function

let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

// return the first index of 'wedensday' in the array

let index = days.findIndex((day) => day === "Wednesday");

console.log(index);




// findIndex() with object elements

const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
  ];


// function that returns age greater than or equal to 18

function isAdult(member){
    return member.age >= 18;
}

console.log(team.findIndex(isAdult));



