// Deep Freeze implementation... (It causes: "Maximum call stack exceeded ");
// Because recursion never ends...!!

function deepFreeze(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }

    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach((key) =>{
        deepFreeze(obj[key])
    })

    return obj;
}


const user = {
    name:"Bhavik",
    address:{
        city:"Nagpur",
        location:{
            pin:440027
        }
    }
}

deepFreeze(user);

user.address.city = 'banglore';
user.address.location.pin = '1234';

console.log(user);