// Element references
const themeIcon = document.querySelector('#theme-icon');
const KartikeImage = document.querySelector("#KartikeImage");
const github = document.querySelector("#github");
const body = document.body;

// get saved theme from local storage
let theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// Function to set the theme
function setTheme(theme) {
    const lightAssets = {icon: "moon.png", image: "Kartike2.jpg", github: "github-icon.png"};
    const darkAssets = {icon: "sun.png", image: "Kartike.jpg", github: "githubwhite.png"};

    const assets = theme === 'light' ? lightAssets : darkAssets;

    body.className = theme;
    themeIcon.src = assets.icon;
    KartikeImage.src = assets.image;
    github.src = assets.github;

    // Saving to LocalStorage
    localStorage.setItem('theme', theme);
}

// on initial load, set the theme from local storage
if (theme) setTheme(theme);

themeIcon.addEventListener('click', function() {
    theme = body.classList.toggle('light') ? 'light' : 'dark';

    setTheme(theme);
});

window.onload = function() {
    theme = localStorage.getItem('theme');

    if (theme) setTheme(theme);
};

$(document).ready(function(){
    // Hide and FadeIn animations
    ["#experience","#projects", "#skills", "#leadershipexperience", "#certifications", "#contact"].forEach((id, i) => {
        $(id).addClass("hidden").hide().fadeIn((i + 1) * 500);
    });

    // Slide in sections when they enter the viewport.
    $(window).scroll(function() {
        $(".hidden").each(function() {
            let top_of_object = $(this).offset().top;
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > top_of_object) {
                $(this).animate({"opacity":"1","margin-left":"0px"},1000);
            }
        });
    });

    $('.navbar-nav>li>b>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });


    let navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s";
        });

        navLink.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
$(document).ready(function() {
    $('h2[data-toggle="collapse"]').on('click', function() {
        var spanElem = $(this).find('span');
        if(spanElem.text() === '⏶') {
            spanElem.text('⏵');
        } else {
            spanElem.text('⏶');
        }
    });

    $('p[data-toggle="collapse"]').on('click', function() {
        var spanElem = $(this).find('span');
        if(spanElem.text() === '⇓') {
            spanElem.text('⇑');
            $(this).css('font-weight', 'bold');
        } else {
            spanElem.text('⇓');
            $(this).css('font-weight', 'normal');
        }
    });
});

const subtitles = [
    'Computer Science Major',
    'Peer Mentor',
    'Head Teaching Assistant',
    'Resident Advisor',
    'Student Engagement Ambassador'
];
let subtitleIndex = 0;
let charIndex = -1;
const subtitleElement = document.querySelector('.lead');
let isDeleting = false;

const typeNextChar = () => {
    if (isDeleting && charIndex === -1) {
        isDeleting = false;
        subtitleIndex = (subtitleIndex + 1) % subtitles.length;
        setTimeout(typeNextChar, 1000); // Adjust this for pause between typing and deleting
    } else if (!isDeleting && charIndex === subtitles[subtitleIndex].length - 1) {
        isDeleting = true;
        setTimeout(typeNextChar, 1000); // Adjust this for pause between typing and deleting
    } else {
        charIndex += isDeleting ? -1 : 1;
        const text = subtitles[subtitleIndex].substring(0, charIndex + 1);
        subtitleElement.textContent = text + (isDeleting ? '' : ''); // Add cursor
        setTimeout(typeNextChar, isDeleting ? 40 : 50); // Adjust typing and deleting speed here
    }
};

setTimeout(typeNextChar, 1000);