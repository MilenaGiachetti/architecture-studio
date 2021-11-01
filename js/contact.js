// message counter
let message = document.getElementById("message_id");
let counter = document.getElementById("message_counter");

message.addEventListener("keyup", (e) => {
    let count = e.target.value.length;
    counter.textContent = count;
})

// --------------------------- VALIDATIONS --------------------------- //
// form elements
let form = document.getElementById("contact_form");
let formBtn = document.getElementById("form_submit");
let formElements = form.querySelectorAll("[required]");

// modal elements
let modal = document.getElementById("modal");
let modalName = document.getElementById("modal_name");
let firstname = document.getElementById("firstname_id");
let modalClose = document.getElementById("modal_close");
let modalContent = document.getElementById("modal_content");

// remove form fields error mesagges
formElements.forEach((el) => {
    el.addEventListener("change", (e) => {
        e.target.parentNode.classList.remove("invalid");
    })
    el.addEventListener("input", (e) => {
        e.target.parentNode.classList.remove("invalid");
    })
})

// individual validations
const validateEmail = (email) => {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

const validateTel = (tel) => {
    var m = tel.match(/\d/g); 
    return m && m.length >= 5; // just check if it has at least 5 numbers - shortest private phone number
}

// field validation
const validateFormField = (el) => {
    var isValidField = true
    if (el.tagName === "INPUT") {
        switch (el.type) {
            case 'text':
                if (el.value == "") {
                    el.parentNode.classList.add("invalid");
                    isValidField = false;
                }
                break;
            case 'email':
                if (!validateEmail(el.value)) {
                    el.parentNode.classList.add("invalid");
                    isValidField = false; 
                }
                break;
            case 'tel':
                if (!validateTel(el.value)) {
                    el.parentNode.classList.add("invalid");
                    isValidField = false; 
                }
                break;
        }
    } else if (el.tagName === "SELECT") {
        if (el.value == "") {
            el.parentNode.classList.add("invalid");
            isValidField = false;
        }
    } else if (el.tagName === "TEXTAREA") {
        if (el.value == "") {
            el.parentNode.classList.add("invalid");
            isValidField = false; 
        } 
    }
    return isValidField;
}

// form validation
const formValidate = () => {
	let isValidForm = true;
    // Check each form field
    for (let i = 0; i < formElements.length; i++) {
        isValidForm = validateFormField(formElements[i]) && isValidForm;
    }
    return isValidForm; // return the valid status
}

// form submit handler
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!formValidate()) {
        document.querySelector(".invalid [required]").focus();
    } else {
        modalName.textContent = ` ${firstname.value}`
        modal.classList.add("modal--open");
    }
})

formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!formValidate()) {
        document.querySelector(".invalid [required]").focus();
    } else {
        modalName.textContent = ` ${firstname.value}`
        modal.classList.add("modal--open");
    }
})

// modal close handler
modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
})

const closeModal = () => {
    modal.classList.remove("modal--open");
    formElements.forEach((el) => {
        el.value = "";
    })
}

modal.addEventListener("click", (e) => {
    closeModal();
})

modalClose.addEventListener("click", (e) => {
    closeModal();
})