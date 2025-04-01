document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popup-overlay");
    const popupBox = document.getElementById("popup-box");
    const closeButton = document.querySelector(".close-btn");

    const chefLinks = {
        gian: [
            { name: "Gian- infamous for his singing in both real life and acting", url: "articles.html#article3" }
        ],
        hera: [
            { name: "Leaked Video: Hera Confronts Zeus Over His Scandalous Affairs", url: "Trending.html#video3" },
            { name: "Hera Confronts Zeus Over Scandalous Affairs", url: "articles.html#article7" }
        ],
        zeus: [
            { name: "Hera Confronts Zeus Over Scandalous Affairs", url: "articles.html#article7" },
            { name: "Leaked Video: Hera Confronts Zeus Over His Scandalous Affairs", url: "Trending.html#video3" }
        ],
        bean: [
            { name: "Mr.Bean thinks that electrical cars are more harmful?? ", url: "articles.html#article8" },
            { name: "Mr.Bean Posts", url: "post.html#post9" }
        ],
        sirius: [
            { name: "Sirius Black and Severus Snape talk it out", url: "articles.html#article2" }
        ],
        snape: [
            { name: "Sirius Black and Severus Snape talk it out", url: "articles.html#article2"}
        ],
        tom: [
            { name: "Shocking Truth: Tom and Jerry Are Actually Best Friends!", url: "Trending.html#video1" },
            { name: "Tom's Post", url: "post.html#post8" }
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
