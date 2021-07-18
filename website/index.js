// nav slider 
const navSlide = () => {
    const burger = document.querySelector('nav.navbar ul.nav-button');
    const nav = document.querySelector('nav.navbar ul#drawer');
    const navLinks = document.querySelectorAll('nav.navbar ul.buttons li');
    const lines = document.querySelectorAll('nav.navbar ul.nav-button div');

    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;

            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();