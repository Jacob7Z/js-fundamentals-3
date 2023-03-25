
// sort()

let farr = [23,45,65,102,"b","D",'A',"coc"];

// normal sorting
let sortedOb = farr.sort(); 

console.log(farr);
console.log(sortedOb);

// sort changes the original array

// sorting using custom function

var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

function len_compare(a,b){ // if a.length - b.length < 0 then a is sorted before b and the opposite
    return a.length - b.length
}

names.sort(len_compare);
console.log(names);


// sorting number numerically  "using a custom function"

var priceList = [1000,50,2,7,14];

// sort() using function expression
// ascending order

priceList.sort(function(a,b){
    return a-b;
});

console.log("ascending " + priceList);

// sort() with arrow function
// descending order

priceList.sort((a,b) => b-a); // after => comes the return value of the arrow funcion
console.log("descending " + priceList);
















