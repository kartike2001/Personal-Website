// DOM selections
const themeIcon = document.querySelector('#theme-icon');
const KartikeImage = document.querySelector("#KartikeImage");
const github = document.querySelector("#github");
const body = document.body;
const navLinks = document.querySelectorAll(".nav-link");
const subtitleElement = document.querySelector('.lead');
const sections = document.querySelectorAll('section');
let theme = localStorage.getItem('theme') || null;

// Variables
const subtitles = [
    'Computer Science Major',
    'Peer Mentor',
    'Head Teaching Assistant',
    'Resident Advisor',
    'Student Engagement Ambassador'
];
let subtitleIndex = 0;
let charIndex = -1;
let isDeleting = false;

// Set Theme
function setTheme(theme) {
    const lightAssets = {icon: "moon.png", image: "Kartike2.jpg", github: "github-icon.png"};
    const darkAssets = {icon: "sun.png", image: "Kartike.jpg", github: "githubwhite.png"};

    const assets = theme === 'light' ? lightAssets : darkAssets;

    body.className = theme;
    themeIcon.src = assets.icon;
    KartikeImage.src = assets.image;
    github.src = assets.github;

    localStorage.setItem('theme', theme);
}

// Set initial theme
if (theme) setTheme(theme);

// Toggle Theme
themeIcon.addEventListener('click', function() {
    theme = body.classList.toggle('light') ? 'light' : 'dark';
    setTheme(theme);
});

// Apply theme on window load
window.onload = function() {
    theme = localStorage.getItem('theme');
    if (theme) setTheme(theme);
};

// Intersection Observer
function createObserver() {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = `fade-in 1s ${entry.target.dataset.delay} forwards ease-out`;
            }
        });
    });
    return observer;
}

// Apply observer to all sections
function applyObserver(observer) {
    sections.forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });
}

// Collapse Navbar on click
function collapseNavbar() {
    $('.navbar-nav>li>b>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
}

// Add mouseover and mouseout events to navLinks
function addMouseEventsToNavLinks() {
    navLinks.forEach((navLink) => {
        navLink.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s";
        });

        navLink.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
}

// Toggle collapse on click
function toggleCollapse() {
    $('h2[data-toggle="collapse"]').on('click', function() {
        var spanElem = $(this).find('span');
        spanElem.text(spanElem.text() === '⏶' ? '⏵' : '⏶');
    });

    $('p[data-toggle="collapse"]').on('click', function() {
        var spanElem = $(this).find('span');
        spanElem.text(spanElem.text() === '⇓' ? '⇑' : '⇓');
        $(this).css('font-weight', spanElem.text() === '⇑' ? 'bold' : 'normal');
    });
}

// Typing animation for subtitles
function typeNextChar() {
    if (isDeleting && charIndex === -1) {
        isDeleting = false;
        subtitleIndex = (subtitleIndex + 1) % subtitles.length;
        setTimeout(typeNextChar, 1000);
    } else if (!isDeleting && charIndex === subtitles[subtitleIndex].length - 1) {
        isDeleting = true;
        setTimeout(typeNextChar, 1000);
    } else {
        charIndex += isDeleting ? -1 : 1;
        const text = subtitles[subtitleIndex].substring(0, charIndex + 1);
        subtitleElement.textContent = text + (isDeleting ? '' : '');
        setTimeout(typeNextChar, isDeleting ? 40 : 50);
    }
};

$(document).ready(function(){
    let observer = createObserver();
    applyObserver(observer);
    collapseNavbar();
    addMouseEventsToNavLinks();
    toggleCollapse();
});

setTimeout(typeNextChar, 1000);
