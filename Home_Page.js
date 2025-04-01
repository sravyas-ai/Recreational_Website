
function expandSearch() {
    var searchBox = document.getElementById("searchBox");
    var searchInput = document.getElementById("searchInput");
    searchBox.classList.toggle("expanded");
    if (searchBox.classList.contains("expanded")) {
        searchInput.focus();
    }
}


function showDropdown() {
    document.getElementById("dropdown-menu").style.display = "block";
}


function hideDropdown() {
    setTimeout(() => {
        document.getElementById("dropdown-menu").style.display = "none";
    }, 200);
}


function filterDropdown() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let dropdown = document.getElementById("dropdown-menu");
    let items = dropdown.getElementsByTagName("a");

    dropdown.style.display = "block";

    let found = false;
    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        
        if (text.includes(input)) {
            items[i].style.display = "block"; // Show matching items
            found = true;
        } else {
            items[i].style.display = "none"; // Hide non-matching items
        }
    }


    if (!found) {
        dropdown.style.display = "none";
    }
}
