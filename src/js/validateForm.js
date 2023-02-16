const form = document.querySelector("form");
const inputEmail = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const buttonForm = document.querySelector(".button-form");

/**
 * Check if input is validity returning true or false
 * 
 * @param {{}} input - Represent inputs captured
 * @param {{}} error - Represent error element
 * @param {{}} button - Represent button that submits
 * @param {Function} callBack
 * @returns {void} - It would return undefined with a console.log
 * 
 * Trying to work with a pure function
 */
function isInputValid(input, error, button, callBack) {
    input.addEventListener("input", () => {
        if (input.validity.valid) {
            error.textContent = "";
            error.className = "error";
            button.removeAttribute("disabled", "");
        } else {
            callBack();
            button.setAttribute("disabled", "");
        }
    });
}
isInputValid(inputEmail, emailError, buttonForm, showError);




form.addEventListener("submit", (event) => {
    if (!emailError.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Inserir um endereço de e-mail";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Inserir um e-mail válido";
    } else if (email.validity.tooShort) {
        emailError.textContent = `O email não pode ter menos que ${email.minLength} caracteres`;
    }

    emailError.className = "error active";
}
