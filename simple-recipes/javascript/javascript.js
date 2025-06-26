// Recipe pop up modal section

// Sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

// Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

// When the user clicks the recipe button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function(event) {
        let modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = 'block';

        // After 10 seconds of being opened, close the modal
        setTimeout(function () {modal.style.display = "none";}, 10000);
    }
}

// When user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) { // Loop through all modals and set their display to "none"
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

// Email Validation

document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        // Overrides the default browser refresh when the submit button is pressed
        event.preventDefault();
        
        // Variabeles to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // email pattern checks for all symbols that would be needed
        // for an email address such as the @ and . and the text that
        // would come before, betwee, and after.
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        // User this variabel to display message if fields are filled out or thank you message
        const valMsg = document.getElementById('validateMsg');

        if (!firstName || !lastName || !phone || !message) {
            // Checks if fields have been filled out
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>';
            return false;
        } else if (!emailPattern.test(email)) {
            //Checks if there is a vaild email
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email</p>';
            return false;
        } else {
            // if all fields are filled out correctly display thank you message
            valMsg.innerHTML = '<p style="color: red;">Thank you for submitting!</p>';
        }

        const formData = {
            fristName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subcribe: document.getElementById("subscription").checked
        };

        // Display what the user wrote in the console
        console.log(JSON.stringify(formData));
    }
)