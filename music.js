document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popup-overlay");
    const popupBox = document.getElementById("popup-box");
    const closeButton = document.querySelector(".close-btn");

    const chefLinks = {
        wooYeonwoo: [
            { name: "Woo Yeonwoo's Post", url: "post.html#post1" }
        ],
        spikeSpiegel: [
            { name: "Spike Spigels's Post", url: "post.html#post11" }
        ],
        mitsuki: [
            { name: "Mitsuki's Post", url: "post.html#post7" }
        ],
        JigglyPuff: [
            { name: "Jiggly Puff's Post", url: "post.html#post2" }
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
