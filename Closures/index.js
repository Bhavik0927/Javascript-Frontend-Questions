
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



function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
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


/*

function attach() {
    const big_Data = new Array(100000).fill('data');

    document.getElementById('btn').addEventListener('click', function () {
        console.log(big_Data.length);
    })
}

// attach();


document.getElementById('clo_btn').addEventListener('click', varFunction);


function varFunction() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(() => { console.log(i) }, 1000)
    }
}


document.getElementById('clo_btn').addEventListener('click', varIFEE_function);

function varIFEE_function(){
    for(var i = 0; i<= 5; i++){
        (function(i){
            setTimeout(() => console.log(i), 1000);
        })(i)
    }
}

*/



// Memory Leak Scenario
function startLeaking(){
    let heavyData = new Array(100000).fill("Memory Leak");

    const intervalId = setInterval(() =>{
        console.log("Still running... Data size: ", heavyData.length);
    },1000)

    console.log("Leak started. Even if this function ends")
}

// startLeaking()


// Prevent It

let intervalId = null;

function startSafe(){
    let heavyData = new Array(1000000).fill("Safe");

    intervalId = setInterval(() =>{
        console.log("Processing...")
    }, 1000);
}


function stopSafe(){
    clearInterval(intervalId);
    intervalId = null;
    console.log("Memory cleared...")
}

startSafe();
stopSafe();