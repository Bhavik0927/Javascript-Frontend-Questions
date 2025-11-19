
// Syntex
// function.call(thisArg, arg1, arg2, arg3, ...);
//   thisArg => What this should refers to
//   arg1, arg2, arg3, ... => function arguments (comma seperated)



const person1 = {
    name: "Bhavik",
    intro(age){
        console.log(`I am ${this.name} and I'm ${age} years old.`)
    }
};

const person2 = {name: "Saurabh"};

person1.intro.call(person2,28);


// -------------------------------------
function printFullName(){
    console.log(this.first + " " + this.last);
}

const user = { first: "Bhavik", last:"Tembhare"};

printFullName.call(user);


// -----------------------------------------

function Animal(name){
    this.name = name
}

function Dog(name,breed){
    Animal.call(this, name);
    this.breed = breed;
}


const d = new Dog("Tiger", "German Shepherd");
console.log(d);


// ---------------------------------------------------



const obj = { value: 100 };

function Display(){console.log(this.value)};

setTimeout(Display.call(obj),5000);