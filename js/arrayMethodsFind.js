// find()

// the find method returns the value of the first element  that satisfies the test function

let numbers = [1,3,4,9,8];

// function to check even number

function isEven(element){
    return element % 2 == 0;
}
// get the first even number

let evenNumber = numbers.find(isEven);
console.log(evenNumber);//4

// using find() method

let randomArray = [1, 45, 8, 98, 7];

function isNumEven(element){
    return element % 2 == 0;
}

let firstEven = randomArray.find(isNumEven);
console.log(firstEven);

// using arrow function

let firstOdd = randomArray.find((element) => element % 2 == 1);

console.log(firstOdd);

// find with object elements

const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
  ];

function isAdult(member){
    return member.age >= 18;
}

console.log(team.find(isAdult));




