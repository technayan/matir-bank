//****** Login page scripts ******//

// Define variables
let emailInput = document.getElementById('email-input');
let passInput = document.getElementById('password-input');
let loginBtn = document.getElementById('login-btn');

// Handle Events

//loginBtn.addEventListener('click', login);

// Functions

function login () {

    // Define variables

    let email = emailInput.value;
    let pass = passInput.value;

    // Conditions

    if (email == 'admin@gmail.com' && pass == 'admin1310') {
        window.location.href="banking.html";
    } else {
        window.alert('Invalid email and password!');
    };
};


//****** Dashboard page scripts ******//

// Define variables

let depositBalanceText = document.getElementById('total-deposit');
let withdrawBalanceText = document.getElementById('total-withdraw');
let mainBalanceText = document.getElementById('total-balance');
let depositInput = document.getElementById('deposit-amount');
let withdrawInput = document.getElementById('withdraw-amount');
let depositBtn = document.getElementById('deposit-btn');
let withdrawBtn = document.getElementById('withdraw-btn');

let withdrawAmount = parseFloat(withdrawInput.value);

// Handle Events

depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);

// Functions

function deposit () {

    // Update Deposit Amount
    
    let depositAmount = parseFloat(depositInput.value);
    let depositBalance = parseFloat(depositBalanceText.innerText);
    depositBalance = depositBalance + depositAmount;
    depositBalanceText.innerText = depositBalance.toFixed(2);

    // Update Balance Amount

    let mainBalance = parseFloat(mainBalanceText.innerText);
    mainBalance = mainBalance + depositAmount;
    mainBalanceText.innerText = mainBalance.toFixed(2);

    // Clear Deposit Input Field

    depositInput.value = '';
}

function withdraw () {

    // Update Withdraw Amount

    let withdrawAmount = parseFloat(withdrawInput.value);
    let withdrawBalance = parseFloat(withdrawBalanceText.innerText);
    withdrawBalance += withdrawAmount;
    withdrawBalanceText.innerText = withdrawBalance.toFixed(2);

    // Update Balance Amount

    let mainBalance = parseFloat(mainBalanceText.innerText);
    mainBalance -= withdrawAmount;
    mainBalanceText.innerText = mainBalance.toFixed(2);

    // Clear Deposit Input Field

    withdrawInput.value = '';
}