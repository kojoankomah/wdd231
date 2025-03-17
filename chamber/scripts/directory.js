function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

const last_modif = new Date(document.lastModified);
document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;

const directoryUrl = 'data/members.json';

const displayBusines// Automatically update the year and last modified date
document.getElementById('copyright-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Toggle the navigation menu
const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// Close the navigation menu when a link is clicked
navUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navUl.classList.remove('active');
    }
});

// Fetch member data and display it
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Display members in grid or list view
function displayMembers(members) {
    const directory = document.getElementById('directory');
    directory.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('business-card');

        if (directory.classList.contains('list-view')) {
            // List view format
            card.innerHTML = `
                <div>
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                </div>
                <div>
                    <p>${member.phone}</p>
                    <p class="details">Details</p>
                </div>
            `;
        } else {
            // Grid view format
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
                <p>${member.description}</p>
            `;
        }

        directory.appendChild(card);
    });
}

// Convert membership level number to text
function getMembershipLevel(level) {
    switch (level) {
        case 1:
            return 'Member';
        case 2:
            return 'Silver';
        case 3:
            return 'Gold';
        default:
            return 'Unknown';
    }
}

// Toggle between grid and list views
document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('directory').classList.remove('list-view');
    document.getElementById('directory').classList.add('grid-view');
    fetchMembers(); // Refresh the display
});

document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('directory').classList.remove('grid-view');
    document.getElementById('directory').classList.add('list-view');
    fetchMembers(); // Refresh the display
});

// Fetch and display members when the page loads
fetchMembers();ses = (businesses) => {
    const grid = document.querySelector('div.grid'); // Select the output container element

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let div = document.createElement('div');
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let p3 = document.createElement('p3');
        let link = document.createElement('a');
        let portrait = document.createElement('img');

        p1.textContent = `${business.name}`;
        p2.textContent = `${business.address}`;
        p3.textContent = `${business.phone}`;
        link.textContent = `${business.link}`;

        portrait.setAttribute('src', business.imagesrc);
        portrait.setAttribute('alt', `${business.name} logo`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '400');
        portrait.setAttribute('height', '400');

        link.setAttribute('href', business.link);

        card.appendChild(portrait);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(link);
        card.appendChild(div);

        grid.appendChild(card);
    });
};

async function getBusinesses() {
    const response = await fetch(directoryUrl);
    const data = await response.json();
    displayBusinesses(data.businesses);
}

getBusinesses();

const gridbutton = document.querySelector(".grid-view");
const listbutton = document.querySelector(".list-view");
const display = document.querySelector("div.grid");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

const currentYear = new Date().getFullYear();
document.querySelector('.currentYear').textContent = currentYear;