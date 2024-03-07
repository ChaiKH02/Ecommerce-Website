// when webpage get reloaded
window.onload = () => {
    filterSelection('all');
    //display current user email 

    let users = localStorage.getItem('users');
    let currentUserIndex = localStorage.getItem("currentUserIndex");
    let currentEmail = JSON.parse(users)[currentUserIndex].email;
    document.getElementById("useremail").innerHTML = currentEmail;
}


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


//filter  & search part
function filterSelection(value) {
    let wire = document.querySelectorAll('.wire')
    let wireless = document.querySelectorAll('.wireless');
    let soundbar = document.querySelectorAll('.soundbar');
    let speaker = document.querySelectorAll('.speaker');
    let headset = document.querySelectorAll('.headset');
    let btn_value = document.querySelectorAll('.btn');
    //current category btn will have a different color
    btn_value.forEach((element) => {
            if (value.toUpperCase() == element.innerHTML.toUpperCase()) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        })
        //display current category
    if (value.toUpperCase() == "WIRE") {
        console.log(value);

        wireless.forEach((element) => {
            element.classList.add('hide');
        })
        soundbar.forEach((element) => {
            element.classList.add('hide');
        })
        speaker.forEach((element) => {
            element.classList.add('hide');
        })
        headset.forEach((element) => {
            element.classList.add('hide');
        })
        wire.forEach((element) => {
            element.classList.remove('hide');
        })

    }
    if (value.toUpperCase() == "WIRELESS") {
        console.log(value);
        wire.forEach((element) => {
            element.classList.add('hide');
        })
        soundbar.forEach((element) => {
            element.classList.add('hide');
        })
        speaker.forEach((element) => {
            element.classList.add('hide');
        })
        headset.forEach((element) => {
            element.classList.add('hide');
        })
        wireless.forEach((element) => {
            element.classList.remove('hide');
        })
    }
    if (value.toUpperCase() == "SPEAKER") {
        console.log(value);
        wire.forEach((element) => {
            element.classList.add('hide');
        })
        soundbar.forEach((element) => {
            element.classList.add('hide');
        })

        headset.forEach((element) => {
            element.classList.add('hide');
        })
        wireless.forEach((element) => {
            element.classList.add('hide');
        })
        speaker.forEach((element) => {
            element.classList.remove('hide');
        })
    }
    if (value.toUpperCase() == "SOUNDBAR") {
        console.log(value);
        wire.forEach((element) => {
            element.classList.add('hide');
        })

        speaker.forEach((element) => {
            element.classList.add('hide');
        })
        headset.forEach((element) => {
            element.classList.add('hide');
        })
        wireless.forEach((element) => {
            element.classList.add('hide');
        })
        soundbar.forEach((element) => {
            element.classList.remove('hide');
        })
    }
    if (value.toUpperCase() == "HEADSET") {
        console.log(value);
        wire.forEach((element) => {
            element.classList.add('hide');
        })
        soundbar.forEach((element) => {
            element.classList.add('hide');
        })
        speaker.forEach((element) => {
            element.classList.add('hide');
        })

        wireless.forEach((element) => {
            element.classList.add('hide');
        })
        headset.forEach((element) => {
            element.classList.remove('hide');
        })
    }
    if (value.toUpperCase() == "ALL") {
        console.log(value);
        wire.forEach((element) => {
            element.classList.remove('hide');
        })
        wireless.forEach((element) => {
            element.classList.remove('hide');
        })
        soundbar.forEach((element) => {
            element.classList.remove('hide');
        })
        speaker.forEach((element) => {
            element.classList.remove('hide');
        })
        headset.forEach((element) => {
            element.classList.remove('hide');
        })
    }
}

//search products
function searchFilter() {
    // let pName = document.getElementsByTagName('strong');
    // let searchInput = document.getElementById("search-input").value;

    document.getElementById("search").addEventListener("click", () => {
        let searchInput = document.getElementById("search-input").value;
        let pName = document.getElementsByTagName('strong');
        let products = document.querySelectorAll(".products");
        let btn_value = document.querySelectorAll('.btn');

        for (index = 0; index < pName.length; index++) {
            for (i = 0; i < searchInput.length; i++) {
                if (searchInput[i].toUpperCase() == pName[index].innerText[i].toUpperCase()) {
                    products[index].classList.remove('hide');
                    btn_value.forEach((element) => {
                        element.classList.remove('active');
                    });
                } else {
                    products[index].classList.add('hide');
                    btn_value.forEach((element) => {
                        element.classList.remove('active');
                    });
                }
            }
        }
    })
}



function priceHighToLow(value) {
    let prices = document.querySelectorAll('.price');
    let PriceArray = [];
    let products_list = document.getElementById('products_list');
    let btnS = document.querySelectorAll('.btnS');

    btnS.forEach((element) => {
        if (element.innerText.toUpperCase() == value.toUpperCase()) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    })

    console.log(prices.length);
    for (i = 0; i < prices.length; i++) {
        let a = prices[i].innerText;
        PriceArray.push(a);

    }
    //high to low
    PriceArray.sort(function(a, b) { return b - a });


    for (x = 0; x < prices.length; x++) {
        for (y = 0; y < prices.length; y++) {
            if (PriceArray[x] == prices[y].innerText) {
                products_list.append(prices[y].parentElement.parentElement.parentElement);
            }
        }
    }
}

function priceLowToHigh(value) {
    let prices = document.querySelectorAll('.price');
    let PriceArray = [];
    let products_list = document.getElementById('products_list');

    let btnS = document.querySelectorAll('.btnS');

    btnS.forEach((element) => {
        if (element.innerText.toUpperCase() == value.toUpperCase()) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    })

    console.log(prices.length);
    for (i = 0; i < prices.length; i++) {
        let a = prices[i].innerText;
        PriceArray.push(a);

    }
    //low to high
    PriceArray.sort(function(a, b) { return a - b });


    for (x = 0; x < prices.length; x++) {
        for (y = 0; y < prices.length; y++) {
            if (PriceArray[x] == prices[y].innerText) {
                products_list.append(prices[y].parentElement.parentElement.parentElement);
            }
        }
    }
}

function demo() {
    // //trying to do the quantity of each product
    // let cart = document.querySelector('.cart');
    // let cartitem1 = localStorage.getItem(currentEmail);

    // for (i = 0; i < JSON.parse(cartitem1).length; i++) {
    //     if (JSON.parse(cartitem1)[i].PName == 'Bose Companion 2 Series III') {
    //         console.log(JSON.parse(cartitem1)[i]);
    //     }
    // }

}