//DOM Elements
const form = document.getElementById("controls");
const headingInput = document.querySelector("#heading-input");
const headingOutput = document.querySelector("#heading-output");
const encodeOrDecode = document.getElementsByName("code");
const letterCase = document.getElementById("letter-case");
const foreignChars = document.getElementById("foreign-chars")
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const shift = document.getElementById("shift-input");
const modulo = document.getElementById("mod-input");
const alphabet = document.getElementById("alphabet-input");

encodeOrDecode.forEach((option) => {
    option.addEventListener("click", () => {
        if (option.value === "encode") {
            headingInput.textContent = "Plaintext";
            headingOutput.textContent = "Ciphertext";
            inputText.value = "";
            outputText.textContent = "";
        } else if(option.value === "decode") {
            headingInput.textContent = "Ciphertext";
            headingOutput.textContent = "Plaintext";
            inputText.value = "";
            outputText.textContent = "";
        }
    });
});