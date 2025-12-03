
let cart = [];

window.onload = () => {
    let saveCart = localStorage.getItem("cartData");
    if(saveCart){
        cart = JSON.parse(saveCart);
        renderCart();
    }
}

function saveCart(){
    localStorage.setItem("cartData", JSON.stringify(cart));
}

function addToCart(id,name,price){
    let item = cart.find(p => p.id === id);
    if(item){
        item.quantity++;
    }else{
        cart.push({id, name, price, quantity: 1})
    }

    saveCart();
    renderCart();
}

function removeItem(id){
    cart = cart.filter(p => p.id !== id );
    saveCart();
    renderCart();
}

function updateQty(id, qty){
    let item = cart.find(t => t.id === id);
    item.quantity = parseInt(qty);
    saveCart();
    renderCart();
}
function renderCart(){
    const tbody = document.querySelector("#cartTable tbody");
    tbody.innerHTML = '';

    cart.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" onchange="updateQty(${item.id}, this.value)">
                </td>
                <td>${item.price * item.quantity} </td>
                <td> <button onclick="removeItem(${item.id})"> X </button> </td>
            </tr>
        `;
    });


    updateTotals();
}

function updateTotals(){
    let subtotal = cart.reduce((s,i) => s + i.price * i.quantity, 0);
    let tax = Math.round(subtotal * 0.18);
    let grand = subtotal + tax;

    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("grandtotal").innerText = grand;

}

function checkout(){
    let name = document.getElementById('name').value.trim(); 
    let email = document.getElementById("email").value.trim(); 
    let address = document.getElementById("address").value.trim(); 

    if(cart.length === 0){ alert("Your cart is empty"); return}

    document.getElementById("successMsg").innerText = "Order Successful 🤩 Thank You " + name;

    cart = [];
    saveCart();
    renderCart();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
}