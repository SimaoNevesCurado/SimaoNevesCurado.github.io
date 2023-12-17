const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {

    hamburger.classList.remove("active");
    navigation.classList.remove("active");
}))
