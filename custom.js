$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){  // Increase animation speed to 1000ms
                window.location.hash = hash;
            });
        } // End if
    });

    $("#about").addClass("hidden").hide().fadeIn(500);
    $("#projects").addClass("hidden").hide().fadeIn(1000);
    $("#skills").addClass("hidden").hide().fadeIn(1500);
    $("#experience").addClass("hidden").hide().fadeIn(2000);
    $("#certifications").addClass("hidden").hide().fadeIn(2500);
    $("#contact").addClass("hidden").hide().fadeIn(3000);

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

    $("section").hover(
        function() {
            $(this).css({
                "transition": "transform 0.3s",
                "transform": "scale(1.02)"
            });
        },
        function() {
            $(this).css({
                "transition": "transform 0.3s",
                "transform": "scale(1)"
            });
        }
    );
});

const themeContainer = document.querySelector('.theme-container');
const themeIcon = document.querySelector('#theme-icon');
const KartikeImage = document.querySelector("#KartikeImage")

// get saved theme from local storage
let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// on initial load, set the theme from local storage
if (currentTheme) {
    document.body.className = currentTheme;
    if (currentTheme === 'light') {
        themeIcon.src = "sun.png";
        KartikeImage.src = "Kartike.jpg"
    } else {
        themeIcon.src = "moon.png";
        KartikeImage.src = "Kartike2.jpg"
    }
}
const themeSwitch = document.getElementById('theme-icon');
const body = document.body;

themeSwitch.addEventListener('click', function() {
    body.classList.toggle('light');

    let theme = 'dark';
    if (body.classList.contains('light')) {
        theme = 'light';
    }

    // Adding transition
    body.style.transition = "all 0.5s ease-in-out";

    document.getElementById('theme-icon').setAttribute('src', theme === 'dark' ? 'sun.png' : 'moon.png');
    document.getElementById('KartikeImage').setAttribute('src', theme === 'dark' ? 'Kartike.jpg' : 'Kartike2.jpg');
    // Saving to LocalStorage
    localStorage.setItem('theme', theme);
});

window.onload = function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        body.classList.add('light');
        document.getElementById('theme-icon').setAttribute('src', 'moon.png');
        document.getElementById('KartikeImage').setAttribute('src', 'Kartike2.jpg');
    }
    else if (theme === 'dark') {
        body.classList.add('dark');
        document.getElementById('theme-icon').setAttribute('src', 'sun.png');
        document.getElementById('KartikeImage').setAttribute('src', 'Kartike.jpg');

    }
};

$(document).ready(function () {
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});
