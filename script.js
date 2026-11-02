"use strict";

document.addEventListener("DOMContentLoaded", function () {

    // Product search functionality
    const productSearch = document.getElementById("productSearch");
    const productList = document.getElementById("productList");
    const searchMessage = document.getElementById("searchMessage");

    if (productSearch && productList) {
        productSearch.addEventListener("input", function () {
            const searchTerm = productSearch.value.trim().toLowerCase();
            const products = productList.querySelectorAll(".product-card");
            let visibleProducts = 0;

            products.forEach(function (product) {
                const productText = product.textContent.toLowerCase();
                const matches = productText.includes(searchTerm);

                product.hidden = !matches;

                if (matches) {
                    visibleProducts++;
                }
            });

            if (searchMessage) {
                if (visibleProducts === 0) {
                    searchMessage.textContent =
                        "No matching products found. Please try another search.";
                } else if (searchTerm !== "") {
                    searchMessage.textContent =
                        visibleProducts + " product(s) found.";
                } else {
                    searchMessage.textContent = "";
                }
            }
        });
    }

    // Enquiry form validation
    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        const nameInput = document.getElementById("fullName");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const typeInput = document.getElementById("enquiryType");
        const messageInput = document.getElementById("message");
        const formResult = document.getElementById("formResult");

        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            clearErrors();

            let isValid = true;

            if (nameInput.value.trim().length < 2) {
                showError(
                    nameInput,
                    "nameError",
                    "Please enter your full name."
                );
                isValid = false;
            }

            if (
                emailInput.value.trim() === "" ||
                !emailInput.checkValidity()
            ) {
                showError(
                    emailInput,
                    "emailError",
                    "Please enter a valid email address."
                );
                isValid = false;
            }

            if (
                phoneInput.value.trim() !== "" &&
                !phoneInput.checkValidity()
            ) {
                showError(
                    phoneInput,
                    "phoneError",
                    "Please enter a valid phone number."
                );
                isValid = false;
            }

            if (typeInput.value === "") {
                showError(
                    typeInput,
                    "typeError",
                    "Please select an enquiry type."
                );
                isValid = false;
            }

            if (messageInput.value.trim().length < 10) {
                showError(
                    messageInput,
                    "messageError",
                    "Please enter a message of at least 10 characters."
                );
                isValid = false;
            }

            if (!isValid) {
                formResult.textContent =
                    "Please correct the errors above and try again.";

                formResult.className = "error-message";

                const firstInvalidField =
                    enquiryForm.querySelector('[aria-invalid="true"]');

                if (firstInvalidField) {
                    firstInvalidField.focus();
                }

                return;
            }

            formResult.textContent =
                "Your information passed validation. This is a demonstration " +
                "form, so your enquiry has not been sent to an inbox.";

            formResult.className = "success-message";
        });

        function showError(input, errorId, message) {
            const errorElement = document.getElementById(errorId);

            if (errorElement) {
                errorElement.textContent = message;
            }

            input.setAttribute("aria-invalid", "true");
        }

        function clearErrors() {
            const errorMessages =
                enquiryForm.querySelectorAll(".error-message");

            errorMessages.forEach(function (error) {
                error.textContent = "";
            });

            const invalidFields =
                enquiryForm.querySelectorAll('[aria-invalid="true"]');

            invalidFields.forEach(function (field) {
                field.removeAttribute("aria-invalid");
            });

            if (formResult) {
                formResult.textContent = "";
                formResult.className = "success-message";
            }
        }
    }

});