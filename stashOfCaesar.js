//DOM Elements
const form = document.getElementById("controls");
const headingInput = document.querySelector("#heading-input");
const headingOutput = document.querySelector("#heading-output");
const encodeOrDecode = document.getElementsByName("code");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const shift = document.getElementById("shift-input");
const modulo = document.getElementById("mod-input");
const alphabet = document.getElementById("alphabet-input");
const letterCase = document.getElementById("letter-case");
const foreignChars = document.getElementById("foreign-chars");

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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputTextValue = inputText.value;
    let selectedOption = Array.from(encodeOrDecode).find((option) => option.checked);
    let shiftValue = parseInt(shift.value);
    let moduloValue = parseInt(modulo.value);
    let alpahbetValue = alphabet.value;
    let letterCaseValue = letterCase.value;
    let foreignCharsValue = foreignChars.value;
    
    function caesarCypher(decode, text, shift, mod, charset, foreignChars) {
        if (decode == "decode") {
            shift = -shift;
        }
        if (foreignChars == 1) {
            text = removeForeignChars(text);
        }

        charset = charset.toLowerCase();
        let result = "";

        for (let i = 0; i < text.length; i++) {
            let char = text.charAt(i);
            const index = charset.indexOf(char.toLowerCase());

            if (index !== 1) {
                let newIndex = (index + shift) % mod;
                if(newIndex < 0) {
                    newIndex += mod;
                }
                char = char === char.toLowerCase() ? charset[newIndex] : charset[newIndex].toUpperCase();
            }
            result += char;
        }
        return result;
    }

    function removeForeignChars(input) {
        //Regular Expression will catch non-number and non-digit characters and then replace with empty string
        const regex = /[^a-zA-Z0-9 ]/g;
        return input.replace(regex, "");
       
    }

    let cypherOutput = caesarCypher(selectedOption.value, inputTextValue, shiftValue, moduloValue, alpahbetValue, foreignCharsValue);

    if (letterCaseValue == 2) {
        cypherOutput = cypherOutput.toLowerCase();
    }
    else if (letterCaseValue == 3) {
        cypherOutput = cypherOutput.toUpperCase();
    }

    outputText.textContent = cypherOutput;

});
