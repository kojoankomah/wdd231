// Get the current year for the copyright
const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = currentYear; // Update the year dynamically

// Get the last modified date of the document
const lastModified = document.lastModified;
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last modified: ${lastModified}`; // Update the last modified date
