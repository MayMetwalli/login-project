const emailInput = document.getElementById("email");
const password = document.getElementById("login-password");
const signUpLink = document.getElementById("sign-up-link");
const logInBtn = document.getElementById("login-btn");


let allInputs = JSON.parse(localStorage.getItem("allInputs")) || [];


logInBtn.addEventListener('click', function(e){
    
    document.getElementById('required-msg').classList.add("d-none"); 
    document.getElementById('incorrect-msg').classList.add("d-none");   
    if(validateEmptyInputs()=== false){
        document.getElementById('required-msg').classList.remove("d-none");        
        e.preventDefault();
        console.log("empty");
        return;
    } 
    const userIndex = getUserIndexByEmail()  
    if(userIndex !== -1){
        console.log("Email is registered")

        if(checkMatchingPassword(userIndex)=== true){
            console.log("Password is correct")
            const currentUsername = allInputs[userIndex].name
            localStorage.setItem("currentUsername",JSON.stringify(currentUsername))
            window.location.href = "home.html";
        }else {
            document.getElementById('incorrect-msg').classList.remove("d-none");
        }
    } else {
        document.getElementById('incorrect-msg').classList.remove("d-none");
    }


})

function validateEmptyInputs(){
    if(emailInput.value === '' || password.value ===''){
        return false
    }    
    else{
        return true
    }}

    function getUserIndexByEmail(){
        let allInputs = JSON.parse(localStorage.getItem('allInputs')) || []
        for (i=0;i<allInputs.length;i++){
            if(allInputs[i].email.toLowerCase() === emailInput.value.toLowerCase()){
                return i
            }}
                return -1
            }

    function checkMatchingPassword(index){
        let allInputs = JSON.parse(localStorage.getItem('allInputs')) || []
        if(allInputs[index].password.toLowerCase() === password.value.toLowerCase()){
            return true
        }
            return false
    }

    signUpLink.addEventListener('click', function(){
        window.location.href = "index.html";
   })

    




