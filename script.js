
function rotatebtn() {

    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var number = "1234567890"
    var symbol = "@$*!~#^%(){}[],."


    var characters = "";
    if (document.getElementById("uppercase").checked) {
        characters += upper;
    }

    if (document.getElementById("lowercase").checked) {
        characters += lower
    }

    if (document.getElementById("numbers").checked) {
        characters += number
    }

    if (document.getElementById("symbols").checked) {
        characters += symbol
    }


    if (characters.length === 0) {
        alert("please select at least one option");
        return
    }


    var length = document.getElementById("lengthNumber").value;
    var password = "";

    for (var i = 0; i < length; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );


    }


    document.getElementById("passwordBox").value = password;


}

function copybtn() {
    // password input box ka value uthao
    var password = document.getElementById("passwordBox").value;

    if (password === "") {
        alert("No password to copy!");
        return;
    }

    // clipboard me copy karo
    navigator.clipboard.writeText(password)
        .then(() => {
            alert("Copied to clipboard ✅");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}


const numberInput = document.getElementById("lengthNumber");
const rangeInput = document.getElementById("lengthSlider");

// slider se number box update
rangeInput.addEventListener("input", () => {
    numberInput.value = rangeInput.value;
});

// number box se slider update
numberInput.addEventListener("input", () => {
    rangeInput.value = numberInput.value;
});