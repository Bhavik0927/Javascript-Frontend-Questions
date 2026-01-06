
const user1 = {
    name:"Bhavik",
    address:{
        city:"Nagpur"
    }
};

const user2 = {...user1};

user2.name="Ronnin";

// console.log(user1);
// console.log(user2);


// const obj = {
//     a: 1,
//     b: 2,
//     sum(){
//         return this.a + this.b;
//     }
// }

// console.log(obj.sum());


const member1 = {
    name:"Bhavik",
    address:{
        city:"Nagpur"
    }
}


const member2 = structuredClone(member1);

member2.address.city = "Pune";

console.log(member1);
console.log(member2);


