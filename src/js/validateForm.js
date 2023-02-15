const form = document.querySelector("form");
const inputEmail = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const buttonForm = document.querySelector(".button-form");

inputEmail.addEventListener("input", () => {
    if (inputEmail.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
        buttonForm.removeAttribute("disabled", "");
    } else {
        showError();
        buttonForm.setAttribute("disabled", "");
        
    }
});

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
