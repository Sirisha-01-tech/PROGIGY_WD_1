// Select navbar
const navbar = document.getElementById("navbar");

// Detect scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});