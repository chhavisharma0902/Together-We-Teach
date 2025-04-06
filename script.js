document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:8080/guides")
        .then(response => response.json())
        .then(data => {
            console.log("Teaching Guides:", data);
        })
        .catch(error => console.error("Error fetching data:", error));

    const menuToggle = document.getElementById('menu-toggle');
    const sideNav = document.getElementById('side-nav');
    const closeNav = document.getElementById('close-nav');

    // Open navigation bar
    menuToggle.addEventListener('click', function () {
        sideNav.classList.add('open');
    });

    // Close navigation bar
    closeNav.addEventListener('click', function () {
        sideNav.classList.remove('open');
    });

    // Close navigation bar when clicking outside
    document.addEventListener('click', function (event) {
        if (!sideNav.contains(event.target) && !menuToggle.contains(event.target)) {
            sideNav.classList.remove('open');
        }
    });
});
