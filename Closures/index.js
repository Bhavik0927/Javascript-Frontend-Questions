
// for(var i = 1; i<= 3; i++){
//     setTimeout(() =>{console.log(i)}, 1000);
// }




/*
for(var i = 1; i<= 3; i++){
    (function (x){
        setTimeout(function () {
            console.log(x);
        }, 1000)
    })(i)
}

*/



function createCounter(){
    let count = 0; 

    return{
        increment: function(){
            count++;
            console.log(count);
        },
        decrement: function(){
            count--;
            console.log(count);
        }
    }
}

// console.log(count);
// console.log(createCounter.count);


const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement()

