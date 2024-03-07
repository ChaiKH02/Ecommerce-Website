let products_table = document.querySelector('.products_table');
let title_Ptable = document.querySelectorAll('.title_Ptable');

let user_cart = localStorage.getItem('users');

let currentUserIndexCart = localStorage.getItem("currentUserIndex");

let cartitem = new Array();
let currentEmailCart = JSON.parse(user_cart)[currentUserIndexCart].email;
cartitem = JSON.parse(localStorage.getItem(currentEmailCart));

let subtotal = 0;
let taxes = 0;
let total1 = 0;


function quantityProducts() {
    var currentCartIndex;
    let currentQuantity = document.querySelectorAll(".item_quantity");
    let displaysubtotal = document.querySelectorAll(".product_price");
    for (let index of currentQuantity) {
        index.onclick = () => {
            currentCartIndex = index.getAttribute("data-index");

            let temp = cartitem[currentCartIndex].Price;

            displaysubtotal[currentCartIndex].innerText = "RM" + (temp * index.value).toFixed(2);
            displaySTT();
        }
        index.click('trigger');

    }

}

function displaySTT() {
    var total = 0;
    let displaysubtotal = document.querySelectorAll(".product_price");
    for (e = 0; e < displaysubtotal.length; e++) {
        var str = displaysubtotal[e].innerHTML;
        var num = str.replace(/\D/g, "");
        num = Number(num / 100).toFixed(2);
        total = Number(total) + Number(num);
    }
    console.log(total);
    let subtotal_con = document.querySelector(".subtotal");
    let taxes_con = document.querySelector(".taxes");
    let total_con = document.querySelector(".total");

    let subtotal1 = 0;
    let taxes1 = 0;
    let total2 = 0;

    subtotal1 += Number(total);
    subtotal_con.innerText = "RM" + subtotal1.toFixed(2);

    taxes1 = (subtotal1 * 0.06).toFixed(2);
    taxes_con.innerText = "RM" + taxes1;

    total2 = 0;
    total2 += Number(taxes1);
    total2 += Number(subtotal1);
    total_con.innerText = "RM" + total2.toFixed(2);

    let cart_price = new Array();
    cart_price = {
        "subtotal": subtotal1.toFixed(2),
        "taxes": taxes1,
        "total": total2.toFixed(2)
    }
    sessionStorage.setItem(currentEmailCart, JSON.stringify(cart_price));
}

if (cartitem.length == 0) {

} else {
    title_Ptable[0].classList.add('show');
    title_Ptable[1].classList.add('show');
    title_Ptable[2].classList.add('show');
    for (i = 0; i < cartitem.length; i++) {
        //cart.html
        let card = document.createElement('tr');
        card.setAttribute('class', 'eachRow');
        let firstcol = document.createElement('td');

        let pro_container = document.createElement("div");
        pro_container.classList.add("info_cart");

        let Pimg = document.createElement('img');
        Pimg.classList.add("img_product");
        Pimg.setAttribute("src", cartitem[i].image);
        pro_container.appendChild(Pimg);

        let smallContainer = document.createElement('div');

        let Products_name = document.createElement('div');
        Products_name.classList.add("product_name");

        Products_name.innerText = cartitem[i].PName;
        smallContainer.appendChild(Products_name);

        let p_price = cartitem[i].Price;
        let Products_price = document.createElement('div');
        Products_price.classList.add("cart_price");
        Products_price.innerText = "RM" + Number(p_price).toFixed(2);
        smallContainer.appendChild(Products_price);

        let trash = document.createElement('i');
        trash.setAttribute("data-name", cartitem[i].PName);
        trash.setAttribute('class', "fa-solid fa-trash-can cartPageTrash demo")
        trash.setAttribute("id", "trashCart");
        trash.setAttribute('data-trashindex', i);
        smallContainer.appendChild(trash);

        pro_container.appendChild(smallContainer);

        firstcol.appendChild(pro_container);

        card.appendChild(firstcol);
        let secondcol = document.createElement('td');
        let quantity = document.createElement('input');
        quantity.setAttribute("value", "1");
        quantity.setAttribute("min", "1");
        quantity.setAttribute("max", "9");
        quantity.classList.add("item_quantity");
        quantity.setAttribute("class", "item_quantity");
        quantity.setAttribute("type", "number");
        let currentQuantity = document.querySelectorAll(".item_quantity");
        quantity.setAttribute("data-index", currentQuantity.length);
        quantity.setAttribute("onclick", "quantityProducts()")
        secondcol.appendChild(quantity);


        let thirdcol = document.createElement('td');
        let quantityProductPrice = document.createElement('div');
        quantityProductPrice.classList.add("product_price");
        quantityProductPrice.innerText = "RM" + Number(p_price).toFixed(2);
        thirdcol.appendChild(quantityProductPrice);

        card.appendChild(secondcol);
        card.appendChild(thirdcol);
        products_table.appendChild(card);
        //price taxes total container
        let subtotal_con = document.querySelector(".subtotal");
        let taxes_con = document.querySelector(".taxes");
        let total_con = document.querySelector(".total");


        subtotal += Number(p_price);
        subtotal_con.innerText = "RM" + subtotal.toFixed(2);

        taxes = (subtotal * 0.06).toFixed(2);
        taxes_con.innerText = "RM" + taxes;

        total1 = 0;
        total1 += Number(taxes);
        total1 += Number(subtotal);
        total_con.innerText = "RM" + total1.toFixed(2);

        let cart_price = new Array();
        cart_price = {
            "subtotal": subtotal.toFixed(2),
            "taxes": taxes,
            "total": total1.toFixed(2)
        }
        sessionStorage.setItem(currentEmailCart, JSON.stringify(cart_price));
    }
}
let checkout = document.querySelector('.checkout');
checkout.onclick = () => {
    let total_con = document.querySelector(".total");
    if (total_con.innerText == "RM0.00") {
        alert("You have no item in your cart now");
    } else {
        location.href = "assgn_pay.html";
    }
}


// function removeCart(itemName) {
//     let cartitem2 = new Array();

//     cartitem2 = JSON.parse(localStorage.getItem(currentEmail))
//     let cart = document.querySelector('.cart');
//     var removeCartIndex = null;

//     for (i = 0; i < cartitem2.length; i++) {
//         if (cartitem2[i].PName == itemName) {
//             removeCartIndex = i;
//         }
//     }
//     if (removeCartIndex != null) {
//         cartitem2.splice(removeCartIndex, 1);
//     }
//     console.log(cartitem2);
//     if (cartitem2.length == 0) {
//         cart.classList.add('off')
//         localStorage.setItem(currentEmail, JSON.stringify(cartitem2));
//     } else {
//         cart.setAttribute('data-count', cartitem2.length);

//         localStorage.setItem(currentEmail, JSON.stringify(cartitem2));
//     }
//     location.reload();
// }