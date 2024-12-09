const form = document.getElementById("form");
const emailErrorMessage = document.getElementById('email-error');


function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const emailInput = data["email"];

    emailErrorMessage.classList.remove('white-font');
    emailErrorMessage.classList.remove('red-font');
    

    if(validateEmail(emailInput)) {
        emailErrorMessage.classList.add('white-font');
        emailErrorMessage.textContent = "Thank-you for registering!";
        
    } else {
        emailErrorMessage.classList.add('red-font');
        emailErrorMessage.textContent = "Please enter a valid email";
        
    }
}

function validateEmail(email) {

    const emailRegex = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    return emailRegex.test(email);

}

form.addEventListener('submit', handleSubmit);