//1

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// console.log(user);

//2

function isEmpty (a){
    for(key in a){
        return false
    }
    return true;
}

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

//3

let salaries = {
    Jhon : 100,
    Ann : 160,
    Pete : 130
}

function sum (a){
    let result = 0;
    for(key in a){
        result += salaries[key]; // getting salaries property values
    }
    return result;
}

console.log(sum(salaries)); //390

//4

let menu = {
    width : 200,
    height : 300,
    title : "My menu"
};
console.log(menu);

multiplyNumeric(menu);

function multiplyNumeric(obj){
    for(let key in obj){
        if (typeof obj[key] == 'number'){
            obj[key] *=2;
        }
    }

}
console.log(menu);
