document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popup-overlay");
    const popupBox = document.getElementById("popup-box");
    const closeButton = document.querySelector(".close-btn");

    const chefLinks = {
        gian: [
            { name: "Profile", url: "https://example.com/gian-profile" },
            { name: "Movies", url: "https://example.com/gian-movies" }
        ],
        hera: [
            { name: "Profile", url: "https://example.com/hera-profile" },
            { name: "Dramas", url: "https://example.com/hera-dramas" }
        ],
        zeus: [
            { name: "Profile", url: "https://example.com/zeus-profile" },
            { name: "Mythological Roles", url: "https://example.com/zeus-roles" }
        ],
        bean: [
            { name: "Profile", url: "https://example.com/bean-profile" },
            { name: "Comedy Shows", url: "https://example.com/bean-comedy" }
        ],
        sirius: [
            { name: "Profile", url: "https://example.com/sirius-profile" },
            { name: "Marauders Movie", url: "https://example.com/sirius-movie" }
        ],
        snape: [
            { name: "Profile", url: "https://example.com/snape-profile" },
            { name: "Movie Roles", url: "https://example.com/snape-roles" }
        ],
        tom: [
            { name: "Profile", url: "https://example.com/tom-profile" },
            { name: "Cartoon Series", url: "https://example.com/tom-jerry" }
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
