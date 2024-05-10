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


gsap.timeline()
.from("#nav1 h2", { opacity: 0, x: -50, duration: 1, ease: "power4.out" })
.from("#nav1 select, #nav1 h3", { opacity: 0, y: 50, duration: 1, ease: "power4.out", stagger: 0.2 })
.from("#nav2 #searchBox", { opacity: 0, x: -50, duration: 1, ease: "power4.out" })
.from("#nav2 #user", { opacity: 0, x: 50, duration: 1, ease: "power4.out" })
.from("#nav2 #searchBox input", { opacity: 0, y: -20, duration: 0.8, ease: "power4.out" })
.from("#nav1 option", { opacity: 0, y: 20, duration: 0.6, ease: "power4.out", stagger: 0.1 })
.from("#nav2 #user", { scale: 0.8, duration: 0.6, ease: "elastic.out(1, 0.5)" })
.from("#nav2 #searchBox input", { width: 0, duration: 0.8, ease: "power4.out", delay: -0.4 })
.from("#nav1 h2", { duration: 1, ease: "bounce.out", delay: -0.4 })
.from("#nav #nav1 h2", { color: "blue", duration: 1, ease: "back.out(1.7)", delay: -0.6 })
.from("#nav2 #searchBox input", { backgroundColor: "white", duration: 1, ease: "back.out(1.7)", delay: -0.8 })


gsap.timeline()
    .from("#nav3-1 h2", { opacity: 0, x: -50, duration: 1, ease: "power4.out", stagger: 0.2 })
    .from("#nav3-2 select, #nav3-2 button", { opacity: 0, x: 50, duration: 1, ease: "power4.out", stagger: 0.2 })
    .from("#tag", { opacity: 0, y: 50, duration: 1, ease: "power4.out" })
    .from("#img1 img, #img2 img", { opacity: 0, scale: 0.5, duration: 1, ease: "back.out", stagger: 0.2 })
    .from("#nav3-1 h2, #nav3-2 select, #nav3-2 button", { rotation: -360, duration: 1, ease: "bounce.out", stagger: 0.2 })
    .from("#nav3", { scale: 0.5, opacity: 0, duration: 1, ease: "elastic.out" })
    .from("#nav3-1 h2", { color: "blue", duration: 1, stagger: 0.1, repeat: 1, yoyo: true })
    .from("#nav3-2 select", { borderColor: "red", duration: 1, repeat: 1, yoyo: true })
    .from("#nav3-1 h2", { letterSpacing: "-=5px", duration: 1, repeat: 1, yoyo: true })
    .from("#nav3-2 button", { textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", duration: 1, repeat: 1, yoyo: true })



Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
});

Shery.makeMagnet("#nav h1, #nav h3" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

const contentAnimation = gsap.timeline();

contentAnimation.from("#content1 h3", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power4.out"
})
.from("#content1 h2", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power4.out"
})
.from("#content1 button", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out"
})
.to("#star", {
    rotate: 360,
    duration: 1,
    repeat: -1,
    ease: "none"
});

const creators = document.querySelectorAll(".creator");
creators.forEach((creator, index) => {
    gsap.fromTo(creator, {
        opacity: 0,
        y: -50,
        scale: 0.5,
        rotation: -45
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: creator,
            start: "top 120%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "restart none none none"
        }
    });
});

const images = document.querySelectorAll(".pic img");
images.forEach((image, index) => {
    gsap.from(image, {
        opacity: 0,
        scale: 0.5,
        blur: 10,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "restart none none none"
        }
    });
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button, index) => {
    gsap.from(button, {
        opacity: 0,
        scale: 0.5,
        rotate: 360,
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
            trigger: button,
            start: "top 290%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "restart none none none"
        }
    });
});

const elements = gsap.utils.toArray("#page2 > #con > *");
elements.forEach((element, index) => {
    gsap.fromTo(element, {
        opacity: 0,
        y: -50,
        scale: 0.5,
        rotation: -45
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "restart none none none"
        }
    });
});
var firstDrop = document.getElementById("firstDrop");
    firstDrop.addEventListener("change", function() {
        var selectedOption = this.value;
        if (selectedOption) {
            window.location.href = selectedOption + ".html";
        }
    });
    var courseDropdown = document.getElementById("course");
    courseDropdown.addEventListener("change", function() {
        var selectedOption = this.value;
        if (selectedOption) {
            window.location.href = selectedOption + ".html";
        }
    });