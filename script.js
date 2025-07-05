// Get references to DOM elements
const body = document.body;
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const navLinks = document.querySelectorAll('.nav-link');
const hamburgerMenuButton = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const contactForm = document.getElementById('contact-form');
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message-text');
const messageOkBtn = document.getElementById('message-ok-btn');

// Function to show custom message box instead of alert
function showMessage(message) {
    messageText.textContent = message;
    messageBox.style.display = 'block';
}

// Event listener for message box OK button
messageOkBtn.addEventListener('click', () => {
    messageBox.style.display = 'none';
});

// Function to toggle between light and dark themes
function toggleTheme() {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Function to check and apply theme preference from localStorage on load
function checkThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        // Default to light mode if no preference or 'light'
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Event Listeners

// Theme toggle button click
themeToggleButton.addEventListener('click', toggleTheme);

// Navigation links click (for smooth scrolling to sections)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor link behavior
        const targetId = e.target.getAttribute('href'); // Get the href attribute (e.g., "#about")
        const targetElement = document.querySelector(targetId); // Find the element by ID

        if (targetElement) {
            // Smooth scroll to the target element
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        // Close mobile menu if open after clicking a link
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            hamburgerMenuButton.classList.remove('open');
        }
    });
});

// Hamburger menu button click
hamburgerMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburgerMenuButton.classList.toggle('open');
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    // In a real application, you would send this data to a server
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form Submitted:', { name, email, message });
    showMessage('Thank you for your message! We will get back to you soon.');
    contactForm.reset(); // Clear the form
});

// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
    checkThemePreference(); // Apply saved theme
});

// Simple animation for hero section elements
// This can be expanded with more complex animations if needed
const animateElements = document.querySelectorAll('.animate-fade-in-up');
animateElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
    }, 300 + (index * 100)); // Stagger animation
});
