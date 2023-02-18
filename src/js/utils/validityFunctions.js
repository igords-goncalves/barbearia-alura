
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
export function isInputValid(input, error, button, callBack) {
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

/**
 * Show types of errors if input constraints aren't valid
 * @param {HTMLElement | null} input
 * @param {Element | null} error
 * @param {string} message
 * @returns {void}
 */
export function showError(input, error) {
    if (input.validity.valueMissing) {
        error.textContent = "Insira um e-mail"
    }

    if (input.validity.tooShort) {
        error.textContent = `O email não pode ter menos que ${input.minLength} caracteres`;
    }

    if (input.validity.typeMismatch) {
        error.textContent = "Inserir um e-mail válido";
    }

    error.className = "error active";
}

/**
 * Show types of errors if input constraints input aren't valid
 * @param {HTMLElement | null} form
 * @param {Element | null} error
 * @param {Function} callBack
 * @returns {void}
 */
export function handleSubmit(form, error, callBack) {
    form.addEventListener("submit", (event) => {
        if (!error.validity.valid) {
            callBack(inputEmail, error);
            event.preventDefault();
        }
    });
}
