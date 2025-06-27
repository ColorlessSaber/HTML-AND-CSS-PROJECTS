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

// *** JQUERY ***
// shrinks header size when document is scrolled down by 80 pixels
$(document).on("scroll", function(){
    // when the webpage is scrolled down from the top by 50px this
    // if statement will trigger
    if ($(document).scrollTop() > 50) {
        // Once the 50px requirment has been met add the
        // nav-shrink class selector to the same HTML element
        // that has the nav class
        $("nav").addClass("nav-shrink");
        // Adjust the position of the mobile drop menu
        // to accommodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        // if the webpage has not been scrolled down or
        // is back at the top of the nav-shrink class seelctor
        // is removed from the HTML element with the nav
        // class selector
        $("nav").removeClass("nav-shrink");
        // The margin for the drop down menu is now
        // return to it's orginal amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }

});

// close modile menu when a navigation link is clicked
$(document).ready(function (){
    // on click when and element contains just the nav-link class and not the dropdown-toggle and then
    // also close when an element with the class .dropdown-item (each movie link) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function(){
        // collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});