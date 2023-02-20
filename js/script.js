// create an object

let users = new Object();

let userr = {
    // property : property value,
};

console.log(typeof(users));  // object
console.log(typeof(userr)); // object


let user = {
    name : 'Jhon',
    age : 30,
    height: 1.90
};

// get value of an object
console.log(user); //all
console.log(user.name);// one property
console.log(user.age);

let userName = user.name; // assign them to a variable
let userAge = user.age;

console.log(userName);
console.log(userAge);

// add property to an object

user.iq = 20;
user.isAdmin = true;
console.log(user);

// delete property

delete user.isAdmin;
console.log(user);

//when adding multiword property it  must be quoted

let bob ={
    name : "bob",
    "is admin" : false,
}
bob["nick name"] = "dawg";
console.log(bob);

// you can use variables as properties

let key = "likes birds";

bob[key] = true;

console.log(bob);

// a property that is calculated at run time

let abc = {
    a : 1,
    b : 2,
    c : 3
};

// let pr = prompt('enter your letter', 'a');
//acess by variable
// console.log(abc[pr]);

// property value shorthand , function


function makeUser(name,age){
    return{
        name : name,
        age : age,
    }
}

let newUser = makeUser('Jack',30);
console.log(newUser);


// non existing properties returns undefined

let bonk = {};
console.log(bonk.lol === undefined);  // returns true if no property



// operator in 


let obj = {
    name : "James",
    lastName : "franco",
    age : 120
};

console.log("name" in obj);  // returns true
console.log("pop" in obj);   // returns false

// for in loop

for(key in obj){
    console.log(key);
    console.log(obj[key]);
}






