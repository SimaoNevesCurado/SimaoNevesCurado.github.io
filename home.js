// Selecting the hamburger icon and navigation menu
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

// Adding a click event listener to the hamburger icon
hamburger.addEventListener("click", () => {
    // Toggling the 'active' class on the hamburger icon
    hamburger.classList.toggle("active");
    
    // Toggling the 'active' class on the navigation menu
    navigation.classList.toggle("active");
});

// Adding click event listeners to each navigation link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    // Removing the 'active' class from the hamburger icon and navigation menu when a link is clicked
    hamburger.classList.remove("active");
    navigation.classList.remove("active");
}));
