document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.querySelector("nav ul");

hamburgerBtn.addEventListener("click", function () {
    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        hamburgerBtn.innerHTML = "&#10005;";
    } else {
        hamburgerBtn.innerHTML = "&#9776;";
    }
});
