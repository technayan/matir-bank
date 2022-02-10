//****** Dashboard page scripts ******//

// Define variables

let depositBalanceText = document.getElementById('total-deposit');
let withdrawBalanceText = document.getElementById('total-withdraw');
let mainBalanceText = document.getElementById('total-balance');
let depositInput = document.getElementById('deposit-amount');
let withdrawInput = document.getElementById('withdraw-amount');
let depositBtn = document.getElementById('deposit-btn');
let withdrawBtn = document.getElementById('withdraw-btn');


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