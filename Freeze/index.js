// It can change bcoz its on the shallow level

/* let user = {
    name : "Bhavik"
}

Object.freeze(user);

user.name = "Ronnin";

console.log(user);
*/



const user = {
    name: "Bhavik",
    address: {
        city:"Nagpur"
    }
}

Object.freeze(user);
user.name = "Ronnjin";
user.address.city = "Banglore";

console.log(user);
