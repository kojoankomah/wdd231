// Load food 
document.addEventListener("DOMContentLoaded", () => {
    const foodsContainer = document.querySelector("#food-container");

    fetch("data/foods.json")
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok.");
            return response.json();
        })
        .then((data) => {
            console.log(data); // Log data to check if it's fetched properly

            data.food.forEach((food) => {
                const card = document.createElement("div");
                card.classList.add("food-card");

                const img = document.createElement("img");
                img.src = food.image; // This should now be pointing correctly to images/ folder
                img.alt = food.name;
                img.loading = "lazy";
                
                img.onerror = () => console.error(`Error loading image: ${food.image}`);

                const name = document.createElement("h3");
                name.textContent = food.name;

                const desc = document.createElement("p");
                desc.textContent = food.description;

                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(desc);
                foodsContainer.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error fetching or displaying food data:", error);
        });
});
