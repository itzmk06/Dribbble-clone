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

Shery.makeMagnet("#nav h2,select,#nav h3" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});


gsap.from("#nav1 h2", { opacity: 0, y: -50, duration: 1, ease: "power4.out" });
gsap.from("#nav1 h3, #firstDrop, #course", { opacity: 0, y: -30, duration: 0.8, ease: "power4.out", stagger: 0.2, delay: 0.5 });

gsap.from("#nav2 #searchBox", { opacity: 0, x: -50, duration: 1, ease: "power4.out", delay: 1 });
gsap.from("#nav2 #user", { opacity: 0, x: 50, duration: 1, ease: "power4.out", delay: 1.2 });

document.getElementById("user").addEventListener("mouseenter", function() {
    gsap.to(this, { rotation: 360, duration: 0.5, ease: "back.out(1.7)" });
});

document.getElementById("user").addEventListener("mouseleave", function() {
    gsap.to(this, { rotation: 0, duration: 0.5, ease: "back.out(1.7)" });
});

Shery.textAnimate("#nav h2" , {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from("#nav-part2 #follow, #options h4", { opacity: 0, y: -50, duration: 1, ease: "power4.out", stagger: 0.2 });
gsap.from("#nav-part2 #rightScroll", { opacity: 0, x: -50, duration: 1, ease: "power4.out", delay: 0.5 });
gsap.from("#nav-part2 #filter", { opacity: 0, x: 50, duration: 1, ease: "power4.out", delay: 0.8 });

document.getElementById("rightScroll").addEventListener("mouseenter", function() {
    gsap.to(this, { rotation: 90, duration: 0.5, ease: "back.out(1.7)" });
});

document.getElementById("rightScroll").addEventListener("mouseleave", function() {
    gsap.to(this, { rotation: 0, duration: 0.5, ease: "back.out(1.7)" });
});

document.getElementById("filter").addEventListener("click", function() {
    gsap.to("#options", { height: "toggle", duration: 0.5, ease: "power4.out" });
});

gsap.registerPlugin(ScrollTrigger);

const blocks = document.querySelectorAll(".block");
blocks.forEach((block, index) => {
    gsap.from(block, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: block,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 5
        }
    });

    block.addEventListener("mouseenter", () => {
        gsap.to(block, { opacity: 0.9, scale: 1.05, duration: 0.3, ease: "power2.out" });
    });

    block.addEventListener("mouseleave", () => {
        gsap.to(block, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
    });
});

const icons = document.querySelectorAll(".ri-heart-line, .ri-bookmark-line");
icons.forEach((icon, index) => {
    gsap.from(icon, {
        opacity: 1,
        y: -50,
        duration: 1,
        ease: "power4.out",
        delay: index * 0.1,
        scrollTrigger: {
            trigger: icon,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 5
        }
    });

    icon.addEventListener("click", () => {
        gsap.to(icon, { rotation: "+=360", scale: 1.1, duration: 1, ease: "power2.out" });
    });
});

const overlayTexts = document.querySelectorAll(".overlay h5");
overlayTexts.forEach((text, index) => {
    gsap.from(text, {
        opacity: 1,
        x: 50,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: text,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 5
        }
    });
});

const videos = document.querySelectorAll(".block video");
videos.forEach((video, index) => {
    gsap.from(video, {
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: video,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 5
        }
    });
});
gsap.registerPlugin(ScrollTrigger);

gsap.from("#getPro", {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: "elastic.out(1, 0.3)", 
    scrollTrigger: {
        trigger: "#getPro",
        start: "top 180%", 
        end: "bottom 20%", 
        scrub: 5, 
    }
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


