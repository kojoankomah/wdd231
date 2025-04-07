console.log("JS is connected");

// Copyright Year and Last Modified
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const navLinks = document.querySelector(".nav-links");

  if (hamburgerButton) {
    hamburgerButton.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const spans = hamburgerButton.querySelectorAll("span");
      spans[0].style.display = navLinks.classList.contains("open") ? "none" : "inline";
      spans[1].style.display = navLinks.classList.contains("open") ? "inline" : "none";
    });
  }
});

// Fetch and Display Members
const membersContainer = document.getElementById('members-container');
const gridBtn = document.getElementById('grid-view-btn');
const listBtn = document.getElementById('list-view-btn');

async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = ''; // Clear previous content
  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');
    card.innerHTML = `
    <img src="${member.image}" alt="${member.name} logo" width="150" height="150" loading="lazy">
    <h3>${member.name}</h3>
    <p><strong>Address:</strong> ${member.address}</p>
    <p><strong>Phone:</strong> ${member.phone}</p>
    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
    <p><strong>Membership:</strong> ${getMembershipLevel(member.membership)}</p>
    <p>${member.info}</p>
  `;
  
    membersContainer.appendChild(card);
  });
}

function getMembershipLevel(level) {
  if (level === 3) return "Gold";
  if (level === 2) return "Silver";
  return "Member";
}

// Toggle View
if (gridBtn && membersContainer) {
  gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view');
  });

  listBtn.addEventListener('click', () => {
  membersContainer.classList.add('list-view');
  membersContainer.classList.remove('grid-view');
});



  // Load members
  getMembers();

  gridBtn.addEventListener('click', () => {
      membersContainer.classList.add('grid-view');
      membersContainer.classList.remove('list-view');
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
    });
    
    listBtn.addEventListener('click', () => {
      membersContainer.classList.add('list-view');
      membersContainer.classList.remove('grid-view');
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
    });
}

// -- Discover Script --


// PHASE 1: Display Places from JSON
const placesContainer = document.getElementById('places-container');

fetch('data/places.json')
  .then((response) => response.json())
  .then((data) => {
    const places = data.places;

    places.forEach((place, index) => {
      const card = document.createElement('div');
      card.classList.add('place-card');
      card.id = `card${index + 1}`; // Unique ID for grid-area

      // Title
      const title = document.createElement('h2');
      title.textContent = place.name;

      // Figure with image
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = place.image;
      img.alt = `Image of ${place.name}`;
      figure.appendChild(img);

      // Address
      const address = document.createElement('address');
      address.textContent = place.address;

      // Description
      const description = document.createElement('p');
      description.textContent = place.description;

      // Button
      const button = document.createElement('button');
      button.textContent = "Learn More";

      // Assemble card
      card.appendChild(title);
      card.appendChild(figure);
      card.appendChild(address);
      card.appendChild(description);
      card.appendChild(button);

      // Add to DOM
      placesContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error('Error loading places.json:', error);
  });



// PHASE 2: Last Visit Tracker with localStorage
const visitMessageContainer = document.getElementById('visit-message');

// Get the last visit date from localStorage (if it exists)
let lastVisitDate = localStorage.getItem('lastVisitDate');

// Get current date
const currentDate = new Date();
const currentDateStr = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD format

// If no last visit date is stored, it’s the user’s first visit
if (!lastVisitDate) {
  visitMessageContainer.innerHTML = `<p>Welcome! Let us know if you have any questions.</p>`;
} else {
  // Calculate the number of days since the last visit
  const lastVisit = new Date(lastVisitDate);
  const timeDiff = currentDate - lastVisit;
  const daysSinceLastVisit = Math.floor(timeDiff / (1000 * 3600 * 24)); // Convert time difference to days

  // Display message based on how many days since last visit
  if (daysSinceLastVisit === 0) {
    visitMessageContainer.innerHTML = `<p>Back so soon! Awesome!</p>`;
  } else {
    visitMessageContainer.innerHTML = `<p>It’s been ${daysSinceLastVisit} day(s) since your last visit.</p>`;
  }
}

// Store the current visit date in localStorage for future visits
localStorage.setItem('lastVisitDate', currentDateStr);