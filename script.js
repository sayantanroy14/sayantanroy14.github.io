// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The page has fully loaded');
    
    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
