function locomotive(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

locomotive();

Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
});

gsap.from("#left h2", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: "power4.out"
});

gsap.from("#right h2", {
    opacity: 0,
    x: 400,
    scrub:5,
    Stagger:1,
    duration: 1.5,
    ease: "power2.out"
});
