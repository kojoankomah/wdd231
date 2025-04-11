// Function to fetch data from the location.json file and display it
function fetchLocations() {
    // Fetch the location.json file
    fetch('data/locations.json')
        .then(response => {
            // Check if the response is okay (status code 200)
            if (!response.ok) {
                throw new Error('Failed to fetch locations data');
            }
            return response.json();
        })
        .then(data => {
            // Call the function to display the restaurants using the fetched data
            displayRestaurants(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to display the restaurant data
function displayRestaurants(data) {
    const locationsList = document.getElementById('locations-list');

    // Loop through the data and create HTML elements for each restaurant
    data.locations.forEach(location => {
        const restaurantCard = document.createElement('div');
        restaurantCard.classList.add('restaurant-card');

        restaurantCard.innerHTML = `
            <img src="${location.image}" alt="${location.name}" class="restaurant-image">
            <h3 class="restaurant-name">${location.name}</h3>
            <p class="restaurant-description">${location.description}</p>
            <p><strong>Location:</strong> ${location.location}</p>
            <p><strong>Open Days:</strong> ${location.openDays}</p>
            <p><strong>Hours:</strong> ${location.hours}</p>
            <p><strong>Contact:</strong> ${location.contact}</p>
            <a href="${location.instagram}" target="_blank" class="instagram-link">Follow on Instagram</a>
        `;

        // Append each restaurant card to the locations list
        locationsList.appendChild(restaurantCard);
    });
}

// Call the fetchLocations function when the page loads
document.addEventListener('DOMContentLoaded', fetchLocations);
