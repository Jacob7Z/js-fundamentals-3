// some()

// a test function return an even number

let numbers = [1,3,2,5,4];

function isEven(element){
    return element % 2 === 0;
}

console.log(numbers.some(isEven));


// uing some() method

// a test function : returns age that is less than 18


function checkMinor(age){
    return age < 18;
}

const ageArray = [34, 23, 20, 26, 12 ,8];

// checks whether ageArray contains any element that is less than 18
let check = ageArray.some(checkMinor);
console.log(check);


// some() method to check result of students


// array of scores obtained by student 
let scoreObtained = [45, 50, 39, 78, 65];

// a test function: returns score less than 40

function studentIsPassed(score){
    return score < 40;
}

// check if score of at least one student is  less than 40

if(scoreObtained.some(studentIsPassed) == true){
    console.log('At least one of the students failed');
}
else{
    console.log('All students are passed.');
}


