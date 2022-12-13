import {listOfCountries} from "./listOfCountries.js";

const body = document.querySelector("body");

const form = document.createElement("form");
form.noValidate = true;
form.name = "formPractice";
form.addEventListener("submit", (event) => {

    if (form.checkValidity() && passwordConfirmationInputValidity) {
        alert("Submitted!");
    } else {
        if (!emailInput.validity.valid) {
            alert("Please check Email address again.");
        } else if (!countryInput.validity.valid) {
            countryMsg.textContent = "Country is required";
            alert("Please select your country.");
        } else if (!zipcodeInput.validity.valid) {
            alert("Please check zipcode again.");
        } else if (!passwordInput.validity.valid) {
            alert("Please check password again.");
        } else if (!passwordConfirmationInputValidity) {
            alert("Please check password confirmation again.");
        } else {
            alert("Please check your input again!");
        }
    }
    event.preventDefault();
    
});

const formDiv = document.createElement("div");
formDiv.classList.add("formDiv");

const rowEmail = document.createElement("div");
rowEmail.classList.add("formRow");
const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.textContent = "Email";
emailLabel.classList.add("required");
rowEmail.appendChild(emailLabel);
const emailMsg = document.createElement("div");
emailMsg.id = "emailMsg";
emailMsg.classList.add("errMsg");
rowEmail.appendChild(emailMsg);
const emailInput = document.createElement("input");
emailInput.id = "email"
emailInput.name = "emailInput";
emailInput.required = true;
emailInput.type = "email";
emailInput.minLength = 8;
emailInput.maxLength = 40;
emailInput.addEventListener("input", () => {
    if (emailInput.validity.valid) {
        emailMsg.textContent = "";
    } else {
        if (emailInput.validity.valueMissing) {
            emailMsg.textContent = "Email address is required";
        } else if (emailInput.validity.typeMismatch) {
            emailMsg.textContent = "Please enter a correct Email address"
        } else if (emailInput.validity.tooShort) {
            emailMsg.textContent = `Email address should be at least ${emailInput.minLength} characters`;
        } else if (emailInput.validity.tooLong) {
            emailMsg.textContent = `Email address should be at most ${emailInput.maxLength} characters`;
        }
    }
});
rowEmail.appendChild(emailInput);
formDiv.appendChild(rowEmail);

const rowCountry = document.createElement("div");
rowCountry.classList.add("formRow");
const countryLabel = document.createElement("label");
countryLabel.setAttribute("for", "country");
countryLabel.textContent = "Country";
countryLabel.classList.add("required");
rowCountry.appendChild(countryLabel);
const countryMsg = document.createElement("div");
countryMsg.id = "countryMsg";
countryMsg.classList.add("errMsg");
rowCountry.appendChild(countryMsg);
const countryInput = document.createElement("select");
const selectTitle = document.createElement("option");
selectTitle.textContent = "- PLEASE SELECT - ";
selectTitle.value = "";
selectTitle.disabled = true;
selectTitle.selected = true;
countryInput.append(selectTitle);
for (let item of listOfCountries) {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    countryInput.append(option);
}
countryInput.id = "country";
countryInput.name = "countryInput";
countryInput.required = true;
rowCountry.appendChild(countryInput);
formDiv.appendChild(rowCountry);

const rowZipcode = document.createElement("div");
rowZipcode.classList.add("formRow");
const zipcodeLabel = document.createElement("label");
zipcodeLabel.setAttribute("for", "zipcode");
zipcodeLabel.textContent = "Zipcode";
rowZipcode.appendChild(zipcodeLabel);
const zipcodeMsg = document.createElement("div");
zipcodeMsg.id = "zipcodeMsg";
zipcodeMsg.classList.add("errMsg");
rowZipcode.appendChild(zipcodeMsg);
const zipcodeInput = document.createElement("input");
zipcodeInput.id = "zipcode";
zipcodeInput.name = "zipcodeInput";
zipcodeInput.type = "text";
zipcodeInput.minLength = 4;
zipcodeInput.maxLength = 14;
zipcodeInput.addEventListener("input", () => {
    if (zipcodeInput.validity.valid) {
        zipcodeMsg.textContent = "";
    } else if (zipcodeInput.validity.tooShort) {
            zipcodeMsg.textContent = `Zipcode address should be at least ${zipcodeInput.minLength} characters`;
    } else if (zipcodeInput.validity.tooLong) {
        zipcodeMsg.textContent = `Zipcode address should be at most ${zipcodeInput.maxLength} characters`;
    }
});
rowZipcode.appendChild(zipcodeInput);
formDiv.appendChild(rowZipcode);

const rowPassword = document.createElement("div");
rowPassword.classList.add("formRow");
const passwordLabel = document.createElement("label");
passwordLabel.setAttribute("for", "password");
passwordLabel.textContent = "Password";
passwordLabel.classList.add("required");
rowPassword.appendChild(passwordLabel);
const passwordMsg = document.createElement("div");
passwordMsg.id = "passwordMsg";
passwordMsg.classList.add("errMsg");
rowPassword.appendChild(passwordMsg);
const passwordInput = document.createElement("input");
passwordInput.id = "password";
passwordInput.name = "passwordInput";
passwordInput.required = true;
passwordInput.type = "password";
passwordInput.minLength = 8;
passwordInput.maxLength = 16;
passwordInput.addEventListener("input", () => {
    if (passwordInput.validity.valid) {
        passwordMsg.textContent = "";
    } else {
        if (passwordInput.validity.valueMissing) {
            passwordMsg.textContent = "Password is required";
        } else if (passwordInput.validity.tooShort) {
            passwordMsg.textContent = `Password should be ${passwordInput.minLength} ~ ${passwordInput.maxLength} characters`;
        }
    }
    if (passwordConfirmationInput.value == passwordInput.value) {
        passwordConfirmationInputValidity = true;
        passwordConfirmationMsg.textContent = "";
    } else {
        passwordConfirmationInputValidity = false;
        passwordConfirmationMsg.textContent = `Please enter the same password as above`;
    }
});
rowPassword.appendChild(passwordInput);
formDiv.appendChild(rowPassword);

const rowPasswordConfirmation = document.createElement("div");
rowPasswordConfirmation.classList.add("formRow");
const passwordConfirmationLabel = document.createElement("label");
passwordConfirmationLabel.setAttribute("for", "passwordConfirmation");
passwordConfirmationLabel.textContent = "Password Confirmation";
passwordConfirmationLabel.classList.add("required");
rowPasswordConfirmation.appendChild(passwordConfirmationLabel);
const passwordConfirmationMsg = document.createElement("div");
passwordConfirmationMsg.id = "passwordConfirmationMsg";
passwordConfirmationMsg.classList.add("errMsg");
rowPasswordConfirmation.appendChild(passwordConfirmationMsg);
const passwordConfirmationInput = document.createElement("input");
passwordConfirmationInput.id = "passwordConfirmation";
passwordConfirmationInput.name = "passwordConfirmationInput";
passwordConfirmationInput.required = true;
passwordConfirmationInput.type = "password";
let passwordConfirmationInputValidity = false;
passwordConfirmationInput.addEventListener("input", () => {
    if (passwordConfirmationInput.value == passwordInput.value) {
        passwordConfirmationInputValidity = true;
        passwordConfirmationMsg.textContent = "";
    } else {
        passwordConfirmationInputValidity = false;
        passwordConfirmationMsg.textContent = `Please enter the same password as above`;
    }
});
rowPasswordConfirmation.appendChild(passwordConfirmationInput);
formDiv.appendChild(rowPasswordConfirmation);

const rowButton = document.createElement("div");
rowButton.classList.add("formRow");
const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";
rowButton.appendChild(submitButton);
formDiv.appendChild(rowButton);

form.appendChild(formDiv);
body.appendChild(form);