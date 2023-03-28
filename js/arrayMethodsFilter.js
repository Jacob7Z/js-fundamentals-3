// filter()
// filter creates a new array   // If the return of the function param is true it stays if its false its filtered out

let numbers = [1,2,3,4,5,6,7,8,9,10];

// function to check even numbers

function checkEven(number){
    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
}

// create a new array   

let evenNumbers = numbers.filter(checkEven);

console.log(evenNumbers);


// filtering values from array

const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];

function checkPrice(element){
    return element > 2000 && !Number.isNaN(element);
}

let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices); // [3000, 5000, 8000]

// using arrow function

let newPrices = prices.filter((price) => (price > 2000 && !Number.isNaN(price)));  // the return of function is true of false 
console.log(newPrices);[3000, 5000, 8000]


