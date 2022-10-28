// const e = require("express");

(function () {

    const form = document.querySelector(".contact-us__form");
    const name = document.querySelector(".client-name");
    const phone = document.querySelector(".client-phone");
    const email = document.querySelector(".client-email");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error")

        errorDisplay.innerText = message;
        inputControl.classList.add("error");
        inputControl.classList.remove("success");
    }

    const setSuccess = element = () => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = "";
        inputControl.classList.add("success");
        inputControl.classList.remove("error");
    }

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    const validateInputs = () => {
        const nameValue = name.value.trim();
        const phoneValue = phone.value.trim();
        const emailValue = email.value.trim();

        if (nameValue === "") {
            setError(name, "Name is required");
        }
        else if (nameValue.length < 5) {
            setError(name, "Name must contain of at least 5 characters");
        }
        else {
            setSuccess(name);
        };
    
        if (phoneValue === "") {
            setError(phone, "Phone is required");
        }
        else if (phoneValue.length < 10) {
            setError(phone, "Phone number must consist of at least 10 characters");
        }
        else {
            setSuccess(phone);
        };

        if (emailValue === "") {
            setError(email, "Email is required");
        }
        else if (!isValidEmail(emailValue)) {
            setError(email, "Provide a valid email address");
        }
        else {
            setSuccess(email);
        };
    
    }
}


)()