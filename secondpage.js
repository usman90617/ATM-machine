// Global account balance
var accountBalance = 20000;

function balance() {
    Swal.fire({
        title: "Account Balance",
        text: "Your balance is " + accountBalance,
        icon: "info",
        confirmButtonText: "OK"
    });
}

function cashWithdraw() {
    Swal.fire({
        title: "Cash Withdrawal",
        input: "number",
        inputLabel: "Enter amount to withdraw",
        inputPlaceholder: "e.g. 500",
        showCancelButton: true,
        confirmButtonText: "Withdraw"
    }).then((result) => {
        if (result.isConfirmed) {
            let amount = parseInt(result.value);

            if (isNaN(amount) || amount <= 0) {
                Swal.fire("Invalid amount!", "Please enter a valid number", "error");
            } else if (amount > accountBalance) {
                Swal.fire("Insufficient Balance!", "You only have " + accountBalance, "warning");
            } else {
                accountBalance -= amount;
                Swal.fire("Success!", "You withdrew " + amount +
                    ".\nRemaining Balance: " + accountBalance, "success");
            }
        }
    });
}

function cashDeposit() {
    Swal.fire({
        title: "Cash Deposit",
        input: "number",
        inputLabel: "Enter amount to deposit",
        inputPlaceholder: "e.g. 500",
        showCancelButton: true,
        confirmButtonText: "Deposit"
    }).then((result) => {
        if (result.isConfirmed) {
            let amount = parseInt(result.value);

            if (isNaN(amount) || amount <= 0) {
                Swal.fire("Invalid amount!", "Please enter a valid number", "error");
            } else {
                accountBalance += amount;
                Swal.fire("Success!", "You deposited " + amount +
                    ".\nRemaining Balance: " + accountBalance, "success");
            }
        }
    });
}

function cancel() {
    window.location.href = "mainpage.html";
}
