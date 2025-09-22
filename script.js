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

const profileIcon = document.getElementById('profileIcon');
const profileDropdown = document.getElementById('profileDropdown');
profileIcon.onclick = function() {
    profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    };
// Hide dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!profileIcon.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.style.display = 'none';
        }
    });
// Logout button
document.getElementById('logoutBtn').onclick = function() {
    // Here you can clear session/localStorage if needed
     window.location.href = 'home.html';
    };