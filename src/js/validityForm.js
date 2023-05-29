import {
    isInputValid,
    showError,
    handleSubmit,
} from "./utils/validityFunctions.js";

const form = document.querySelector("form");
const buttonForm = document.querySelector(".button-form");

const inputName = document.getElementById("name")
const nameError = document.getElementById("#name span.error")

const inputEmail = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const inputTel = document.getElementById("tel");
const telError = document.querySelector("#tel + span.error");

isInputValid(inputEmail, emailError, buttonForm, showError);
handleSubmit(form, emailError, showError);

isInputValid(inputName, nameError, buttonForm, showError)
handleSubmit(form, nameError, showError)

isInputValid(inputTel, telError, buttonForm, showError)
handleSubmit(form, telError, showError)
