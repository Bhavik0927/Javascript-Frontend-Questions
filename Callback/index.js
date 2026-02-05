
/*
function greet(name,callback){
    console.log("Hello " +  name);
    callback();
}

greet("Bhavik", function (){
    console.log("Welcome!")
})

*/



/*

// CallBack Hell

getUser(id, function (user){
    getOrders(user.id, function(orders){
        getPayment(orders[0], function (payment){
            sendInvoice(payment, function(){
                console.log("Done..!!");
            })
        })
    })
});

*/

// Fixed callback hell

/* getUser(id)
.then(user => getOrders(user.id))
.then(orders => getPayment(orders[0]))
.then(payment => sendInvoice(payment))
.catch(err => console.log(err));

*/

/* 

try{
    const user = await getUser(id);
    const orders = await getOrder(user.id);
    const payment = await getPayment(orders[0]);
    await sendInvoice(payment)
}catch(e){console.log(e)}

*/

/*

function higherOrder(fn){
    return function(){
        fn()
    }
}

*/
