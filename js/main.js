let currentUsername = JSON.parse(localStorage.getItem("currentUsername")); 

document.getElementById("username").innerHTML = currentUsername;

document.getElementById("logout-btn").addEventListener('click',function(){
    window.location.href = "log-in.html";
})



