const filters = document.querySelectorAll(".filter");
const foodCards = document.querySelectorAll(".food-card");
filters.forEach(function(filter) {
    filter.addEventListener("click", function() {
        // Remove active class
        filters.forEach(function(button) {
            button.classList.remove("active");
        });
        // Add active class
        this.classList.add("active");
        const category = this.dataset.category;
        foodCards.forEach(function(card) {
            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});