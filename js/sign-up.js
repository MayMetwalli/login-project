const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const password = document.getElementById("signup-password");
const signUpBtn = document.getElementById("signup-btn");
const logInLink = document.getElementById("log-in-link");




// Sign Up Page //

let allInputs = JSON.parse(localStorage.getItem("allInputs")) || [];


signUpBtn.addEventListener('click', function(e){
    const inputs = {
        name: nameInput.value,
        email: emailInput.value,
        password: password.value,
    };
    

    document.getElementById('required-msg').classList.add("d-none"); 
    document.getElementById('username-msg').classList.add("d-none");
    document.getElementById('valid-email-msg').classList.add("d-none"); 
    email.classList.remove("is-invalid"); 
    
    if(validateEmptyInputs()=== false){
        document.getElementById('success-msg').classList.add("d-none");
        document.getElementById('required-msg').classList.remove("d-none");
        document.getElementById('username-msg').classList.add("d-none");
        e.preventDefault();
        console.log("empty");
        return;
    }
    if(validateEmail()=== false){
        email.classList.add("is-invalid");
        document.getElementById('valid-email-msg').classList.remove("d-none");
        e.preventDefault();
        return;
    } 

    if(checkUsername() === false){
        document.getElementById('success-msg').classList.add("d-none");
        document.getElementById('required-msg').classList.add("d-none");
        document.getElementById('username-msg').classList.remove("d-none");
        e.preventDefault()
        return;
    }

    if(checkEmail(emailInput) === false){
        document.getElementById('success-msg').classList.add("d-none");
        document.getElementById('required-msg').classList.add("d-none");
        document.getElementById('username-msg').classList.add("d-none");
        document.getElementById('email-msg').classList.remove("d-none");
        e.preventDefault()
        return;
    }

    document.getElementById('success-msg').classList.remove("d-none");
    document.getElementById('required-msg').classList.add("d-none");
    document.getElementById('username-msg').classList.add("d-none");
    document.getElementById('email-msg').classList.add("d-none");
    allInputs.push(inputs);
    saveToLocalStorage()

}
)


function validateEmptyInputs(){
    if(nameInput.value==='' || emailInput.value === '' || password.value ===''){
        return false
    }    
    return true
}

function validateEmail(){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
  if (emailRegex.test(emailInput.value)) {
    return true
  } 
  return false
}

function checkUsername(){
    let allInputs = JSON.parse(localStorage.getItem('allInputs')) || []
    for (i=0;i<allInputs.length;i++){
        if(allInputs[i].name.toLowerCase() == nameInput.value.toLowerCase()){
            return false
        }}
            return true
}

function checkEmail(){
    let allInputs = JSON.parse(localStorage.getItem('allInputs')) || []
    for (i=0;i<allInputs.length;i++){
        if(allInputs[i].email.toLowerCase() == emailInput.value.toLowerCase()){
            return false
        }}
            return true
        }





function saveToLocalStorage(){
    localStorage.setItem("allInputs",JSON.stringify(allInputs))
    console.log("user added")
}


logInLink.addEventListener('click', function(){
     window.location.href = "log-in.html";
})





