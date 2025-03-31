document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popup-overlay");
    const popupBox = document.getElementById("popup-box");
    const closeButton = document.querySelector(".close-btn");

    const chefLinks = {
        sanji: [
            { name: "Profile", url: "https://example.com/sanji-profile" },
            { name: "Recipes", url: "https://example.com/sanji-recipes" }
        ],
        sukuna: [
            { name: "Profile", url: "https://example.com/sukuna-profile" },
            { name: "Dishes", url: "https://example.com/sukuna-dishes" }
        ],
        mukouda: [
            { name: "Profile", url: "https://example.com/mukouda-profile" },
            { name: "Secret Ingredients", url: "https://example.com/mukouda-ingredients" }
        ],
        soma: [
            { name: "Profile", url: "https://example.com/soma-profile" },
            { name: "Competitions", url: "https://example.com/soma-competitions" }
        ]
    };

    document.querySelectorAll(".read-more").forEach(item => {
        item.addEventListener("click", function () {
            let chefKey = this.getAttribute("data-chef");
            if (chefLinks[chefKey]) {
                popupBox.innerHTML = `
                    <h2>${chefKey.charAt(0).toUpperCase() + chefKey.slice(1)}'s Links</h2>
                    ${chefLinks[chefKey].map(link => `<a href="${link.url}" target="_blank">${link.name}</a><br>`).join("")}
                `;
                popupOverlay.style.display = "block";
            }
        });
    });

    closeButton.addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });

    popupOverlay.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });
});
