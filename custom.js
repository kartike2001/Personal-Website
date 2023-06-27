// Selectors
const themeIcon = document.querySelector('#theme-icon');
const KartikeImage = document.querySelector('#KartikeImage');
const body = document.body;
const themeSwitch = document.querySelector('#theme-icon');

// On initial load, set the theme from local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    setTheme(currentTheme);
}

// Theme Switch event listener
themeSwitch.addEventListener('click', () => {
    const newTheme = body.classList.contains('light') ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Set Theme
function setTheme(theme) {
    body.className = theme;
    body.style.transition = "all 0.5s ease-in-out";
    themeIcon.src = theme === 'light' ? "moon.png" : "sun.png";
    KartikeImage.src = theme === 'light' ? "Kartike2.jpg" : "Kartike.jpg";
}

$(document).ready(function () {
    // Navigation click behavior
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Hash-based navigation
    $('a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });

    // Section effects
    const sections = ['#about', '#projects', '#skills', '#experience', '#certifications', '#contact'];
    sections.forEach((id, i) => {
        $(id).addClass('hidden').hide().fadeIn((i + 1) * 500);
    });

    // Slide in sections when they enter the viewport
    $(window).scroll(function () {
        $('.hidden').each(function () {
            const top_of_object = $(this).offset().top;
            const bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > top_of_object) {
                $(this).animate({ "opacity": "1", "margin-left": "0px" }, 1000);
            }
        });
    });

    // Section hover effect
    $('section').hover(
        function () {
            $(this).css({ "transition": "transform 0.3s", "transform": "scale(1.02)" });
        },
        function () {
            $(this).css({ "transition": "transform 0.3s", "transform": "scale(1)" });
        }
    );
});
