// Expands the search bar when clicked
function expandSearch() {
    var searchBox = document.getElementById("searchBox");
    var searchInput = document.getElementById("searchInput");
    searchBox.classList.toggle("expanded");
    if (searchBox.classList.contains("expanded")) {
        searchInput.focus();
    }
}

// Shows the dropdown when typing
function showDropdown() {
    document.getElementById("dropdown-menu").style.display = "block";
}

// Hides the dropdown when clicking outside
function hideDropdown() {
    setTimeout(() => {
        document.getElementById("dropdown-menu").style.display = "none";
    }, 200);
}

// Filters the dropdown menu based on input
function filterDropdown() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let dropdown = document.getElementById("dropdown-menu");
    let items = dropdown.getElementsByTagName("a");
    
    // Show the dropdown while typing
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

    // Hide the dropdown if no results
    if (!found) {
        dropdown.style.display = "none";
    }
}
