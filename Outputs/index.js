const a = {};
const b = { name: "Bhavik" };
const c = { name: "villa" };
a[b] = { name: "rohan" };
a[c] = { name: "Elon" };

// console.log(a[b]);

// console.log(b)
// console.log(a[c])


// console.log(String(b))
// console.log(String(c))

/*
const ab = new Map();

ab.set(b, {name: "Rohasn"})
ab.set(c, {name: "Elon"});


console.log(ab.get(b));

*/


function Closures(){
    let count = 0; 

    function inner(){
        count++;
        console.log(count);
    }

    return inner;
}

let  q1 = Closures();
q1()
q1()
q1()
q1()