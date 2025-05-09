const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }
} else {
    // Default to light mode if no preference is stored
    document.body.classList.add('light-mode');
    themeToggleButton.textContent = 'Switch to Dark Mode';
}

themeToggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }
});

// Simple animation for section headers on scroll (example)
// More complex animations would require libraries like GSAP or more intricate CSS
const sections = document.querySelectorAll('section');
const options = {
    root: null, // viewport
    threshold: 0.1, // 10% of the item is visible
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        // entry.target.style.animation = 'fadeIn 1s ease-out forwards'; // Apply animation
        // observer.unobserve(entry.target); // Optional: stop observing after animation
    });
}, options);

sections.forEach(section => {
    // observer.observe(section); // You can enable this for scroll animations
});