//display current user email 
let users = localStorage.getItem('users');
let currentUserIndex = localStorage.getItem("currentUserIndex");
let currentEmail = JSON.parse(users)[currentUserIndex].email;
console.log(currentEmail);
document.getElementById("useremail").innerHTML = currentEmail;