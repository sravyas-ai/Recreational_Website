document.addEventListener("DOMContentLoaded", async function () {
    await loadPreviousData();
});

async function loadPreviousData() {
    let previousData = JSON.parse(localStorage.getItem("allUserData")) || [];
    let userData = JSON.parse(localStorage.getItem("userData")) || {};
    let bookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    let bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];

    if (userData.name) {
        previousData.push({ ...userData, seats: bookedSeats, event: bookedEvents });
        localStorage.setItem("allUserData", JSON.stringify(previousData));
    }
    
    displayData(previousData);
}

function displayData(data) {
    let table = document.getElementById("dataTable");
    table.innerHTML = `<tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Email</th>
        <th>Booked Seats</th>
        <th>Event</th>
    </tr>`;

    data.forEach(user => {
        let row = `<tr>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.email}</td>
            <td>${user.seats ? user.seats.join(", ") : "N/A"}</td>
            <td>${user.event ? user.event : "N/A"}</td>
        </tr>`;
        table.innerHTML += row;
    });
}

function clearData() {
    localStorage.removeItem("allUserData");
    localStorage.removeItem("userData");
    localStorage.removeItem("bookedSeats");
    localStorage.removeItem("bookedEvents");
    displayData([]);
}

function redirectToProfile() {
    window.location.href = "userprofile.htm";
}
