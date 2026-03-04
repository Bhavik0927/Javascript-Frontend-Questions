
const user1 = {
    name:"Bhavik",
    address:{
        city:"Nagpur"
    }
};

const Copied_user2 = {...user1};

Copied_user2.name="Ronnin";
Copied_user2.address.city = "Banglore";

//  console.log("original user: ", user1);
//  console.log("copied user: ",Copied_user2);


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
member2.name = "Holly"

console.log(member1);
console.log(member2);


