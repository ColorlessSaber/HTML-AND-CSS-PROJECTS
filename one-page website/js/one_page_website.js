function openModal () {
    document.getElementById("myModal").style.display = "block";
}

function closeModal () {
    document.getElementById("myModal").style.display = "none";
}

// control the slideshow
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    // Check to see if n is greater than slide length or negative.
    // if so, reset it to the proper value
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // Set all slide to be hidden
    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    // set all thumbnail images to be "non-active"
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // set the selected slide to viewable and thumnail image to "active"
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

// Set the slide show to the first index
var slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlide(n) {
    showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}