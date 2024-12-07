// Select all accordion buttons and paragraphs
const accordionButtons = document.querySelectorAll('.accordionbtn');
const accordionContents = document.querySelectorAll('.accordionContent');

// Function to close all accordion sections
const closeAllAccordions = () => {
    accordionContents.forEach(content => {
        content.classList.add('max-h-0'); 
        content.style.maxHeight = '0'; 
    });
    accordionButtons.forEach(button => {
        const icon = button.querySelector('svg');
        icon.classList.remove('rotate-180'); 
    });
};

// Open the first accordion by default
const openFirstAccordion = () => {
    const firstContent = accordionContents[0];
    const firstButton = accordionButtons[0].querySelector('svg');
    firstContent.classList.remove('max-h-0');
    firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    firstButton.classList.add('rotate-180');
};

// Add event listeners to each button
accordionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Close all other accordions
        closeAllAccordions();

        // Open the clicked accordion
        const content = button.nextElementSibling;
        const icon = button.querySelector('svg');
        content.classList.remove('max-h-0');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
    });
});

// Initialize accordion on page load
document.addEventListener('DOMContentLoaded', () => {
    closeAllAccordions();
    openFirstAccordion();
});


// typing banner animation

// Lines to type
const lines = [
    "in their preferred language",
    "and uncover deeper insights",
    "with intellegent ai interview"
];

// Typing effect configurations
let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function type() {
    const currentLine = lines[lineIndex];
    const displayText = isDeleting
        ? currentLine.substring(0, charIndex--)
        : currentLine.substring(0, charIndex++);

    typingText.textContent = displayText;

    // Control typing speed
    const typingSpeed = isDeleting ? 50 : 100;

    // Move to next phase
    if (!isDeleting && charIndex === currentLine.length) {
        setTimeout(() => (isDeleting = true), 1000); // Pause at the end of a line
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % lines.length; // Loop through lines
    }

    setTimeout(type, typingSpeed);
}

// Start typing
document.addEventListener("DOMContentLoaded", type);

