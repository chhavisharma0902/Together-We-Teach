document.addEventListener("DOMContentLoaded", function () {
    const express = require('express');
    const app = express();
    const port = 3000;

    // ... other server setup

    app.get('/guides', (req, res) => {
    // Replace this with the actual data you want to send
    const guidesData = [
        { id: 1, title: 'Guide 1', content: '...' },
        { id: 2, title: 'Guide 2', content: '...' },
    ];
    res.json(guidesData); // Send the data as JSON
    });

    // ... other server routes

    app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });
    fetch("/guides") // Use a relative path if the server is on the same origin
        .then(response => response.json())
        .then(data => {
            console.log("Teaching Guides:", data);
        })
        .catch(error => console.error("Error fetching data:", error));

    const menuToggle = document.getElementById('menu-toggle');
    const sideNav = document.getElementById('side-nav');
    const closeNav = document.getElementById('close-nav');

    // Open navigation bar
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            sideNav.classList.add('open');
        });
    }

    // Close navigation bar
    if (closeNav) {
        closeNav.addEventListener('click', function () {
            sideNav.classList.remove('open');
        });
    }


    // Close navigation bar when clicking outside
    document.addEventListener('click', function (event) {
        if (sideNav && menuToggle && !sideNav.contains(event.target) && !menuToggle.contains(event.target)) {
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
     window.location.href = 'index.html';
    };

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDxcLK9k3wDvkryAYkknhWVieeazapRga0",
    authDomain: "together-we-teach-login.firebaseapp.com",
    projectId: "together-we-teach-login",
    storageBucket: "together-we-teach-login.firebasestorage.app",
    messagingSenderId: "625431963840",
    appId: "1:625431963840:web:b598180fa36d0a0105a525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);