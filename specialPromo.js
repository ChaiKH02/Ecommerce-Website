function cartAdd(PName, price, images) {

    let users = localStorage.getItem('users');
    let currentUserIndex = localStorage.getItem("currentUserIndex");
    let currentEmail = JSON.parse(users)[currentUserIndex].email;
    let cartitem2 = new Array();

    cartitem2 = JSON.parse(localStorage.getItem(currentEmail)) ? JSON.parse(localStorage.getItem(currentEmail)) : []
    let cart = document.querySelector('.cart');
    for (i = 0; i < cartitem2.length; i++) {
        if (cartitem2[i].PName == PName) {
            alert("Item has already in cart.");
            return;
        }
    }
    cartitem2.push({
        'PName': PName,
        'Price': price,
        'image': images
    });
    cart.setAttribute('data-count', cartitem2.length);
    cart.classList.remove('off');

    localStorage.setItem(currentEmail, JSON.stringify(cartitem2));
    location.reload();
}
//FOR TIMER AND WEBSITE NAV//
// Set the date we're counting down to
var countDownDate = new Date("April 21, 2022 18:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer1"
    document.getElementById("timer1").innerHTML = days + "d : " + hours + "h : " +
        minutes + "m : " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer1").innerHTML = "EXPIRED";
    }
}, 1000);

//Timer 2//
var countDownDate = new Date("April 21, 2022 21:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer1"
    document.getElementById("timer2").innerHTML = days + "d : " + hours + "h : " +
        minutes + "m : " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer2").innerHTML = "EXPIRED";
    }
}, 1000);

//GO to other website//
function InfoFunction() {
    window.open("https://www.logitech.com/en-my/products/personal-workspaces/logi-dock.html")
}