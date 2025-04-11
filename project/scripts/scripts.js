document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".main-nav");

    menuButton.addEventListener("click", () => {
        // Toggle menu visibility
        navMenu.style.display = navMenu.style.display === "none" || navMenu.style.display === "" ? "flex" : "none";

        // Toggle button icon
        menuButton.textContent = menuButton.textContent === "❌" ? "☰" : "❌";
    });
});

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Insert the current year into the span with id 'current-year'
  document.getElementById('current-year').textContent = currentYear;


  // Get the current page's filename from the URL
  const currentPage = window.location.pathname;

  // Get all the navigation links
  const navLinks = document.querySelectorAll('nav a');

  // Loop through each link
  navLinks.forEach(link => {
    // If the link's href matches the current page, add the 'active' class
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });


