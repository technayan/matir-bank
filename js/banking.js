//****** Dashboard Script ******/

// Declaring Variables

let totalDeposit = document.getElementById('total-deposit');
let totalWithdraw = document.getElementById('total-withdraw');
let totalBalance = document.getElementById('total-balance');
let depositInput = document.getElementById('deposit-amount');
let withdrawInput = document.getElementById('withdraw-amount');
let depositBtn = document.getElementById('deposit-btn');
let withdrawBtn = document.getElementById('withdraw-btn');

// Event Handlers

depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);

///// Functions \\\\\

// Update Function

function update (input, total) {
    let amount = parseFloat(input.value);
    let totalAmount = parseFloat(total.innerText);
    if (amount >= 0) {
        totalAmount += amount;
        total.innerText = totalAmount.toFixed(2);
    } 
}

// Balance Update Function 

function updateBalance (input, isAdd) {
    let amount = parseFloat(input.value);
    let totalBalanceAmount = parseFloat(totalBalance.innerText);
    if (amount >= 0) {
        if (isAdd == true) {
            totalBalanceAmount += amount;
            totalBalance.innerText = totalBalanceAmount.toFixed(2);
        } else {
            if (amount > totalBalanceAmount) {
                alert ('Insufficiant Balance! Please, deposit some money first!');
            } else {
                totalBalanceAmount -= amount;
                totalBalance.innerText = totalBalanceAmount.toFixed(2);
            }
        };
        input.value = '';
    } else {
        alert('Please enter a positive value!');
    }
}

// Deposit Function

function deposit () {
    update (depositInput, totalDeposit);
    updateBalance (depositInput, true);
};

// Withdraw Function

function withdraw () {
    update (withdrawInput, totalWithdraw);
    updateBalance (withdrawInput, false);

};