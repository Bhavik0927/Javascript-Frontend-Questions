/*
function getName(){
    console.log(this.name)
}

getName();

*/




/*
const getuserName = () =>{
    var name = "Bhavik";
    console.log(this.name);
}

getuserName();

*/




/*
console.log(x);   // undefined
// const x = 10;
// let x = 10;
var x = 10;
console.log(x);

*/


// greet();
// var greet = () =>{
//     console.log("Hello from hoisting");
// }


/*
function greet(){
    console.log("Hello")
}
*/

/*
var greet = function(){
    console.log("Function expression")
}

*/


// console.log(this);

/*

function Person(name){
    this.name = name;
}

const bvk = new Person("Bhavik");
console.log(bvk.name);

*/



/*
function greet(){
    console.log(`Hello ${this.name}`)
}


const user = { name: "Bhavik"};
const user1 = { name: "Raja Hindustani"};

greet.call(user1);
greet.apply(user1);

const bindValue = greet.bind(user);
bindValue();

*/

/*
let name = "rQA";

const user = {
//   name: "Bhavik",
  greet() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();

const user1 = {
    name:"Bhavik",
    greet(){
        setTimeout(() =>{
            console.log(this.name);
        },1000)
    }
}

user1.greet();

*/


/*
let name = "Raj";

const user = {
    name:"Bhavik",
    greet:() =>{
        console.log(this.name);
    }
}


user.greet();
*/


/*
const user1 = {
    name:"Bhavik",
    greet(){
        console.log(this.name);
    }
}

user1.greet();

*/



<Hello></Hello>






