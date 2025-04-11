document.addEventListener("DOMContentLoaded", () => {
    // Ensure tips-container exists before proceeding
    const container = document.getElementById("tips-container");

    if (!container) {
        console.error("Element 'tips-container' not found!");
        return;
    }

    // Fetch JSON Data
    fetch("data/tips.json")
        .then(response => {
            if (!response.ok) throw new Error("Failed to load JSON");
            return response.json();
        })
        .then(data => {
            container.innerHTML = ""; // Clear any previous content
            data.tips.forEach(tip => {
                const tipElement = document.createElement("div");
                tipElement.classList.add("tip-card");
                tipElement.innerHTML = `
                    <h3>${tip.name}</h3>
                    <img src="${tip.image}" alt="${tip.name}" class="tip-image">
                    <p>${tip.bio}</p>
                    <strong>How to Enjoy:</strong>
                    <p>${tip.howToEnjoy}</p>
                `;
                container.appendChild(tipElement);
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
