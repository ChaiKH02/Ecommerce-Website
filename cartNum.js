//push cartitem which got from localstorage into a array
let users1 = localStorage.getItem('users');
let currentUserIndex1 = localStorage.getItem("currentUserIndex");
let currentEmail1 = JSON.parse(users1)[currentUserIndex1].email;
let cart1 = document.querySelectorAll('.cart');
let cartitem1 = localStorage.getItem(currentEmail1);
if (JSON.parse(cartitem1) != null) {

    if (JSON.parse(cartitem1).length > 0) {
        cart1.forEach((e) => {
            e.setAttribute('data-count', JSON.parse(cartitem1).length);
        })

    } else {
        cart1.forEach((e) => {
            e.classList.add('off');
        })

    }
} else {
    cart1.forEach((e) => {
        e.classList.add('off');
    })
}