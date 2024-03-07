let cartIcon = document.querySelector("#cart_icon");
let wrapCart = document.querySelector(".wrap_cart");
let cart_small = document.querySelector(".smallcart");
let closeCart = document.querySelector(".closecart");
let clearCart = document.querySelector(".clear");


cartIcon.addEventListener("mouseover", () => {
    wrapCart.classList.add("active1");
})

closeCart.addEventListener("click", () => {
    wrapCart.classList.remove("active1");
})


let user_head_cart = localStorage.getItem('users');
let currentUserIndexHeadCart = localStorage.getItem("currentUserIndex");
let currentEmailHeadCart = JSON.parse(user_head_cart)[currentUserIndexHeadCart].email;

let cartitem3 = new Array();
cartitem3 = JSON.parse(localStorage.getItem(currentEmailHeadCart));

if (cartitem3.length == 0) {

} else {
    let total_price_head_cart = Number(0);
    for (i = 0; i < cartitem3.length; i++) {
        let cart_head_list = document.querySelector('.head_cart_list');

        let content_cart = document.createElement('div');
        content_cart.setAttribute('class', "content_cart");

        let cart_img = document.createElement('img');
        cart_img.setAttribute('class', "img_item");
        cart_img.setAttribute('src', cartitem3[i].image);

        content_cart.appendChild(cart_img);

        let product_info1 = document.createElement('div');
        product_info1.setAttribute("class", "product_info");

        let product_name1 = document.createElement('div');
        product_name1.setAttribute('class', 'product_name');
        product_name1.innerHTML = cartitem3[i].PName;
        product_info1.appendChild(product_name1);

        let cart_price1 = document.createElement('div');
        cart_price1.setAttribute('class', 'cart_price');
        cart_price1.innerHTML = "RM" + cartitem3[i].Price;
        product_info1.appendChild(cart_price1);

        let trashCart1 = document.createElement('i');
        trashCart1.setAttribute("class", "fa-solid fa-trash-can cartPageTrash");
        trashCart1.setAttribute('id', 'trashIcon');
        trashCart1.setAttribute('data-trashindex', i);
        trashCart1.setAttribute('data-name', cartitem3[i].PName);
        content_cart.appendChild(product_info1);
        content_cart.appendChild(trashCart1);

        cart_head_list.appendChild(content_cart);

        total_price_head_cart = Number(cartitem3[i].Price) + Number(total_price_head_cart);
        let total_amount_head_cart = document.querySelector('.total_amount');
        total_amount_head_cart.textContent = "RM" + Number(total_price_head_cart).toFixed(2);
    }


}

function clearProduct() {
    var all_cartItem = document.getElementsByClassName("content_cart");
    var infoCart = document.getElementsByClassName("info_cart");
    var qty = document.getElementsByClassName("item_quantity");
    var sprice = document.getElementsByClassName("product_price");
    for (var i = 0; i < all_cartItem.length; i++) {
        let j = 0;
        while (j <= 15) {
            all_cartItem[i].remove();

            infoCart[i].remove();

            qty[i].remove();
            sprice[i].remove();
            j++
        }
    }
}