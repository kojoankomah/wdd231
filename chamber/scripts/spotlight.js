const spotlightsSection = document.querySelector('.spotlights');

// Fetch the JSON data
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    // Filter for only Silver (2) and Gold (3) members
    const spotlightMembers = data.members.filter(member => member.membership === 2 || member.membership === 3);

    // Shuffle the members
    const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());

    // Randomly pick 2 or 3 members
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

    // Clear default spotlights if needed
    spotlightsSection.innerHTML = '';

    // Generate each spotlight card
    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('business-card');
      card.innerHTML = `
        <div class="header-tag">
          <h3>${member.name}</h3>
          <p>${member.info}</p>
        </div>
        <div class="business-card-img">
          <div>
            <img src="${member.image}" alt="${member.name} logo" loading="lazy">
          </div>
          <div>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership: ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
          </div>
        </div>
      `;
      spotlightsSection.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading spotlight data:', error));
