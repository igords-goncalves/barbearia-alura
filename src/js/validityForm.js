const form = document.querySelector("form");
const inputEmail = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const buttonForm = document.querySelector(".button-form");

/**
 * Check if input is validity returning true or false
 * 
 * @param {HTMLElement | null} input - Represent inputs captured
 * @param {Element | null} error - Represent error element
 * @param {Element | null} button - Represent button that submits
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
            callBack(input, error);
            button.setAttribute("disabled", "");
        }
    });
}
isInputValid(inputEmail, emailError, buttonForm, showError);




form.addEventListener("submit", (event) => {
    if (!emailError.validity.valid) {
        showError(inputEmail, emailError);
        event.preventDefault();
    }
});

function showError(input, error) {
    if (input.validity.valueMissing) {
        error.textContent = "Inserir um endereço de e-mail";
    } else if (input.validity.typeMismatch) {
        error.textContent = "Inserir um e-mail válido";
    } else if (input.validity.tooShort) {
        error.textContent = `O email não pode ter menos que ${input.minLength} caracteres`;
    }

    error.className = "error active";
}
