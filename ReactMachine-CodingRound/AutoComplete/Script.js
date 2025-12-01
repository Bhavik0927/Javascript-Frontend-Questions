
const fruits = ["apple", "apricot", "banana", "mango"];

const input = document.getElementById("search");


function debounce(fn, delay){
    let timer;

    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(() =>{
            fn.apply(this, args)
        },delay)
    }
}

const handleSearch = (e) =>{
    let inputValue = e.target.value.toLowerCase();
    const suggestion = fruits.filter(item => item.toLowerCase().startsWith(inputValue));

    console.log(suggestion);
}

// Without Debounce
// input.addEventListener('input', handleSearch);


// With Debounce
input.addEventListener('input', debounce(handleSearch, 1500));