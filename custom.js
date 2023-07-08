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
    $('[data-toggle="tooltip"]').tooltip();

    // Smooth scroll
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });

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
        if(spanElem.text() == '⏶') {
            spanElem.text('⏵');
        } else {
            spanElem.text('⏶');
        }
    });

    $('li[data-toggle="collapse"]').on('click', function() {
        var spanElem = $(this).find('span');
        if(spanElem.text() == '⇓') {
            spanElem.text('⇑');
        } else {
            spanElem.text('⇓');
        }
    });
});


