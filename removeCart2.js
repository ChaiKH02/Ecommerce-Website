let trashclick = document.querySelectorAll(".cartPageTrash");
for (let b of trashclick) {
    b.onclick = () => {
        // console.log(b.getAttribute("data-name"));
        b.parentElement.remove();
        removeCart(b.getAttribute("data-name"));

    }
}


function removeCart(itemName) {
    let user_cart = localStorage.getItem('users');

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
    if (cartitem2 != null) {
        if (cartitem2.length == 0) {
            cart.classList.add('off')

            localStorage.setItem(currentEmailCart, JSON.stringify(cartitem2));
        } else {
            cart.setAttribute('data-count', cartitem2.length);

            localStorage.setItem(currentEmailCart, JSON.stringify(cartitem2));
        }
    } else {
        cart.classList.add('off')
    }

    displaySTT2();
}


function displaySTT2() {
    let user_cart = localStorage.getItem('users');
    let currentUserIndexCart = localStorage.getItem("currentUserIndex");
    let cart = document.querySelector('.cart');
    let total_amount_head_cart = document.querySelector('.total_amount');
    let cartitem0 = new Array();
    let currentEmailCart = JSON.parse(user_cart)[currentUserIndexCart].email;
    cartitem0 = JSON.parse(localStorage.getItem(currentEmailCart))

    if (cartitem0 != null) {
        if (cartitem0.length == 0) {
            cart.classList.add('off')
            cart.setAttribute('data-count', cartitem0.length);
            total_amount_head_cart.innerHTML = "RM0.00";
        } else {
            let head_cart_total = 0;
            for (z = 0; z < cartitem0.length; z++) {
                head_cart_total = Number(cartitem0[z].Price) + Number(head_cart_total);
                total_amount_head_cart.innerHTML = "RM" + (head_cart_total).toFixed(2);
            }
        }
    } else {
        cart.classList.add('off')
        cart.setAttribute('data-count', 0);
        total_amount_head_cart.innerHTML = "RM0.00";
    }

}

function clearProduct() {
    let user_cart = localStorage.getItem('users');
    let currentUserIndexCart = localStorage.getItem("currentUserIndex");
    let currentEmailCart = JSON.parse(user_cart)[currentUserIndexCart].email;
    localStorage.removeItem(currentEmailCart);
    let content_cart = document.querySelectorAll('.content_cart');

    content_cart.forEach((content) => {
        content.remove();
    })

    displaySTT2();
}