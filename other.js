document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popup-overlay");
    const popupBox = document.getElementById("popup-box");
    const closeButton = document.querySelector(".close-btn");

    const chefLinks = {
        nami: [
            { name: "Nami's Post", url: "post.html#post10" },
            { name: "First Time in Corporate History! Three Employees Fired After Their Very First Lunch Break!", url: "articles.html#article11" }
        ],
        spiderMan: [
            { name: "The Alchemy of Minds!", url: "interviews.html#interview3" },
            { name: "Spiderman's Post", url: "post.html#post4" }
        ],
        TobioKageyama: [
            { name: "Kageyama Tobio: Volleyball Prodigy or Locker Room Nightmare?", url: "articles.html#article10" }
        ],
        research: [
            { name: "The Alchemy of Minds: When Oppenheimer, Walter White, and Sherlock Holmes Redefined Reality", url: "articles.html#article12" },
            { name: "Conspiracy theories from the pokemon world", url: "video8" },
            { name: "The secret of scooby doo", url: "video9" },
            { name: "The Simpsons: Predicting the Future would be like!This is one of the  Conspiracy theories.", url: "video11" },
            { name: "The Alchemy of Minds!", url: "interview3" }
        ],
        Gru: [
            { name: "World’s favourite villain and comedian", url: "interviews.html#interview1" },
            { name: "Gru's Post", url: "post.html#post3" }
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

