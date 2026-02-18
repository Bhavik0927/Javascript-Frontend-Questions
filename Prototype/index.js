/*
const Person = {
    greet(){
        console.log('Bhavik');
    }
}

const bhavik = Object.create(Person);
bhavik.greet();

*/



/*
function Person(name){
    this.name = name;
}

Person.prototype.greet = function (){
    console.log(`Hello, my name is ${this.name}`);
}

const bhavik = new Person("Bhavik");
bhavik.greet();

*/


/*

const car = {
    wheels : 4,
    drive(){
        console.log("Driving...");
    }
}

const tesla = Object.create(car);
console.log(tesla);
console.log(tesla.wheels);
tesla.drive();

*/



function User(name){
    this.name = name;
}

User.prototype.sayHii = function (){
    console.log("Hii " + this.name);
}


const u1 = new User("Bhavik");
u1.sayHii();




