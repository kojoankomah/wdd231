document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.createElement("button");
    menuToggle.textContent = "☰ Menu";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header").prepend(menuToggle);

    const nav = document.querySelector("nav");
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");  // Toggle 'open' class on nav

        if (nav.classList.contains("open")) {
            menuToggle.textContent = "❌ Close";  // Change to "X" when open
        } else {
            menuToggle.textContent = "☰ Menu";   // Change back to hamburger
        }
    });
});


// wayfinding

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
