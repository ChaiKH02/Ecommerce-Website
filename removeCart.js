let trashclick = document.querySelectorAll(".cartPageTrash");
for (let b of trashclick) {
    b.onclick = () => {

        removeCart(b.getAttribute("data-name"));
    }
}


function removeCart(itemName) {
    let user_cart = localStorage.getItem('users');
    console.log(itemName);
    let currentUserIndexCart = localStorage.getItem("currentUserIndex");
    let cartitem2 = new Array();
    let currentEmailCart = JSON.parse(user_cart)[currentUserIndexCart].email;
    cartitem2 = JSON.parse(localStorage.getItem(currentEmailCart))
    let cart = document.querySelector('.cart');
    var removeCartIndex = null;

    for (i = 0; i < cartitem2.length; i++) {
        if (cartitem2[i].PName == itemName) {
            removeCartIndex = i;

        }
    }
    if (removeCartIndex != null) {
        cartitem2.splice(removeCartIndex, 1);
    }
    // console.log(cartitem2);
    if (cartitem2.length == 0) {
        let title_Ptable = document.querySelectorAll('.title_Ptable');
        cart.classList.add('off')
        title_Ptable[0].classList.remove('show');
        title_Ptable[1].classList.remove('show');
        title_Ptable[2].classList.remove('show');
        localStorage.setItem(currentEmailCart, JSON.stringify(cartitem2));
    } else {
        cart.setAttribute('data-count', cartitem2.length);

        localStorage.setItem(currentEmailCart, JSON.stringify(cartitem2));
    }
    removeInweb(removeCartIndex);
}


function removeInweb(index) {
    let iCart = document.querySelectorAll(".info_cart")[index];
    console.log(iCart);
    iCart.remove();

    let qtty = document.querySelectorAll(".item_quantity")[index].parentElement.parentElement;
    let subprice = document.querySelectorAll(".product_price")[index].parentElement.parentElement;
    qtty.remove();
    subprice.remove();
    let cartitem = new Array();
    let currentEmailCart = JSON.parse(user_cart)[currentUserIndexCart].email;
    cartitem = JSON.parse(localStorage.getItem(currentEmailCart));

    let content_cart = document.querySelectorAll('.content_cart');
    content_cart[index].remove();
    displaySTT1();

}

function displaySTT1() {

    var total = 0;
    let displaysubtotal = document.querySelectorAll(".product_price");
    for (e = 0; e < displaysubtotal.length; e++) {
        var str = displaysubtotal[e].innerHTML;
        var num = str.replace(/\D/g, "");
        num = Number(num / 100).toFixed(2);
        total = Number(total) + Number(num);

    }

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

    let total_amount_head_cart = document.querySelector('.total_amount');

    let cart_price = new Array();
    cart_price = {
        "subtotal": subtotal1.toFixed(2),
        "taxes": taxes1,
        "total": total2.toFixed(2)
    }
    let user_cart = localStorage.getItem('users');
    let currentUserIndexCart = localStorage.getItem("currentUserIndex");
    let currentEmailCart = JSON.parse(user_cart)[currentUserIndexCart].email;
    let cartitem0 = new Array();
    cartitem0 = JSON.parse(localStorage.getItem(currentEmailCart))
        // console.log(cartitem0.length);
    if (cartitem0 != null) {
        if (cartitem0.length != 0) {
            let head_cart_total = 0;
            for (z = 0; z < cartitem0.length; z++) {
                head_cart_total = Number(cartitem0[z].Price) + Number(head_cart_total);
                total_amount_head_cart.innerHTML = "RM" + (head_cart_total).toFixed(2);
            }
        } else {
            total_amount_head_cart.innerHTML = "RM0.00";
        }
    } else {
        total_amount_head_cart.innerHTML = "RM0.00";
    }

    sessionStorage.setItem(currentEmailCart, JSON.stringify(cart_price));


}

function clearProduct() {
    let user_cart = localStorage.getItem('users');
    let currentUserIndexCart = localStorage.getItem("currentUserIndex");
    let currentEmailCart = JSON.parse(user_cart)[currentUserIndexCart].email;
    localStorage.removeItem(currentEmailCart);
    let content_cart = document.querySelectorAll('.content_cart');
    let iCart = document.querySelectorAll(".eachRow");
    iCart.forEach((row) => {
        row.remove();
    })

    content_cart.forEach((content) => {
        content.remove();
    })
    let cart = document.querySelector('.cart');
    let title_Ptable = document.querySelectorAll('.title_Ptable');
    cart.classList.add('off')
    cart.setAttribute('data-count', 0);
    title_Ptable[0].classList.remove('show');
    title_Ptable[1].classList.remove('show');
    title_Ptable[2].classList.remove('show');
    // localStorage.setItem(currentEmailCart, 0);
    displaySTT1();
}