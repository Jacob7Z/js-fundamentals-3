// this

const person1 = {
    name : "Joe",
    introductSelf(){
        console.log(`hi i'm ${this.name}`);
    },
};

person1.introductSelf(); // Joe