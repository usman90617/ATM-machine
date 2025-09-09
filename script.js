var userPin = 1234
var balance = 10000

var insertBtn = document.getElementById("insert-card-btn");


var insertBtn = document.getElementById("btn-1");

insertBtn.onclick = function () {
    insertBtn.style.display = "none";
    document.getElementById("pin-input").style.display = "block";

}.onclick = function () {

    insertBtn.style.display = "none";

    document.getElementById("pin-input").style.display = "block";
}
function insertCard() {
    var pinInputContainer = document.getElementById("pin-input")
    pinInputContainer.style.display = "inline-block"

}

function checkPin() {
    var pin = document.getElementById("pin");
    var userOptions = document.getElementById("user-options");


    if (pin.value === "") {
        Swal.fire({
            title: "Please enter a pin!",
            text: "Pin field cannot be empty",
            icon: "error",
            confirmButtonText: "Retry"
        });
        return;
    }

    if (parseInt(pin.value) === userPin) {
        Swal.fire({
            title: "Correct Pin!",
            text: "Redirecting...",
            icon: "success",
            confirmButtonText: "Go"
        }).then(() => {
            window.location.href = "secondpage.html";
        });
    } else {
        Swal.fire({
            title: "Wrong Pin!",
            text: "Please try again",
            icon: "error",
            confirmButtonText: "Retry"
        });
    }

    pin.value = "";
}

