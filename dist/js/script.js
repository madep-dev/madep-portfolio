// Particle js
window.onload = function () {
    Particles.init({
        selector: ".background",
        color: "#2563eb",
        connectParticles: "true",
        responsive: [
            {
                breakpoint: 1200,
                options: {
                    sizeVariations: "5",
                    maxParticles: "40",
                    minDistance: "80",
                },
            },
        ],
    });
};

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});
