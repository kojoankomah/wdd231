
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