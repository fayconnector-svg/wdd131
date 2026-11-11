// Hamburger menu toggle logic
const mainNav = document.querySelector('.navigation');
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

// Footer year dynamic output
const currentYearSpan = document.querySelector('#currentyear');
currentYearSpan.textContent = new Date().getFullYear();

// Footer last modified dynamic output
const lastModifiedParagraph = document.querySelector('#lastModified');
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;