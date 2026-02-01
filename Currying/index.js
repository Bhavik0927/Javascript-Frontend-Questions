
// Normal Currying
const a1 = (a) =>{
    return (b) =>{
        return (c) =>{
            return a * b + c;
        }
    }
}

console.log(a1(23)(165)(54));


// Infinite Currying


function sum(a){

    let total = a;

    function inner(b){
        if(b === undefined) return total;

        total += b;
        return inner;
    }

    return inner;
}

console.log(sum(12)(32)(1)())