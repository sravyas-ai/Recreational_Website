document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popup-overlay");
    const popupBox = document.getElementById("popup-box");
    const closeButton = document.querySelector(".close-btn");

    const chefLinks = {
        sanji: [
            { name: "World’s favourite villain and comedian", url: "articles.html#article1" },
            { name: "Sanji's Post", url: "post.html#post6" }
        ],
        sukuna: [
            { name: "World’s favourite villain and comedian", url: "articles.html#article1" }
        ],
        mukouda: [
            { name: "Mukouda's Post", url: "post.html#post5" },
            { name: "The Legendary Cook with a Fenrir Companion", url: "articles.html#article5" }
        ],
        soma: [
            { name: " The Scandals of Sōma Yukihira ", url: "articles.html#article9" }
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
