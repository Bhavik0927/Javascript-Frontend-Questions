
// How can you cancel or set a timeout for a promise in Javascript...?

const fetchWithTimeOut = async (url, timeout = 15000) =>{
    const controller = new AbortController();

    const id =  setTimeout(() => controller.abort(), timeout);

    return await fetch(url, { signal: controller.signal })
    .finally(() => clearTimeout(id))
};


fetchWithTimeOut("https://jsonplaceholder.typicode.com/users", 5000)
.then(res => res.json())
.then(console.log)
.catch(err => {
    if(err.name === "AbortError"){
        console.log("Request timed out..!!")
    }else{
        console.log("Other error: ", err);
    }
})

