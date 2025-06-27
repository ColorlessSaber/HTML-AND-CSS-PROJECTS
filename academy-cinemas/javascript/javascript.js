// initialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img'); // Gets the location of the save image file
    var content = "<img class = 'star-rating' src='" + imgSrc + "'>"; // sets up HTML <img> tag to show image
    new bootstrap.Popover(element, { // creates the popover image.
        content: content,
        html: true,
        trigger: 'hover'
    });
});

// initialize toast
const toastElList = document.querySelectorAll('.toast');
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl));

// function to display toat with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    // display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show();
}

function buyTickets() {
    displaySelectedMovieOptions();
}