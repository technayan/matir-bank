//****** Login page scripts ******//

// Define the variables
let emailInput = document.getElementById('email-input');
let passInput = document.getElementById('password-input');
let loginBtn = document.getElementById('login-btn');

// Handle Events

loginBtn.addEventListener('click', login);

// Functions

function login () {
    let email = emailInput.value;
    let pass = passInput.value;
    console.log(email);
    console.log(pass);
}