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