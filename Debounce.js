// Implement Debounce Function | Flipkart UI 

function Debounce(fn,delay){
    let timer;

    // Return a new function that will be called instead of 'fn';
    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(() =>{

            // Call the original function with correct 'this' and arguments
            fn.apply(this, args)

        },delay)
    }
}


function fetchSearchResults(value){
    console.log("API called with: ", value)
}


const optimize = Debounce(fetchSearchResults, 500);

optimize("h")
optimize("he")
optimize("hel")
optimize("hell")
optimize("hello");