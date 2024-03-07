var modal = document.getElementById("theModal");

var img = document.getElementById("qmark");
var modal_img = document.getElementById("cvv_img");
var img_text = document.getElementById("textbar");
img.onclick = function() {
    modal.style.display = "block";
    modal_img.src = cvv.png.src;
    img_text.innerHTML = cvv.png.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onload = begin;

function begin() {
    var DelDate = new Date();
    var Today = new Date();
    var numberOfDaysToAdd = 30;
    Today.setDate(Today.getDate() + numberOfDaysToAdd);

    var d = String(Today.getDate()).padStart(2, "0");
    var m = String(Today.getMonth() + 1).padStart(2, "0");
    var y = Today.getFullYear();

    var someFormattedDate = d + "." + m + "." + y;

    DelDate = someFormattedDate;

    document.getElementById("deldate").innerHTML = DelDate;
}

document.forms[0].onsubmit = function() {
    window.print();
    removeAllCart();
}



let user_pay = localStorage.getItem('users');
let currentUserIndexPay = localStorage.getItem('currentUserIndex');
let currentEmailPay = JSON.parse(user_pay)[currentUserIndexPay].email;

let con_subtotal = document.querySelector('.pay_subtotal');
let con_taxes = document.querySelector('.pay_taxes');
let con_total = document.querySelector('.pay_total');

let pay_data = sessionStorage.getItem(currentEmailPay);
let pay_subtotal = JSON.parse(pay_data).subtotal;
let pay_shipping = Number(7.00);
let pay_taxes = Number(JSON.parse(pay_data).taxes);
let pay_total = Number(JSON.parse(pay_data).total) + pay_shipping;

con_subtotal.innerHTML = "RM" + pay_subtotal;
con_taxes.innerHTML = "RM" + pay_taxes;
con_total.innerHTML = "RM" + pay_total;


function removeAllCart() {
    localStorage.removeItem(currentEmailPay);
}