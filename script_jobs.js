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

Shery.makeMagnet("#nav h1, #nav h3" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
const tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power4.out",
    }
});

tl.from("#homeContent h1", { opacity: 0, y: -50, stagger: 0.2 })
  .from("#keepDown", { opacity: 0, x: -50 })
  .from("#homeContent h4:last-child", { opacity: 0, x: -50 })
  .from("button", { opacity: 0, y: 50 });

ScrollTrigger.create({
    trigger: "#homeContent",
    animation: tl,
    start: "top 100%",
    end: "bottom bottom",
});
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


const buttonAnimation = gsap.timeline({
    defaults: {
        duration: 0.8,
        ease: "power4.out",
    }
});

buttonAnimation.from("button, input[type='button'], input[type='submit']", {
    opacity: 0,
    y: 20,
    rotationX: -90,
    rotationY: -90,
    scale: 0.8,
    stagger: 0.1
}).to("button, input[type='button'], input[type='submit']", {
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    stagger: 0.1
});

const buttons = document.querySelectorAll("button, input[type='button'], input[type='submit']");
buttons.forEach(button => {
    const path = MorphSVGPlugin.pathDataToBezier("#motionPath");
    button.addEventListener("mouseenter", () => {
        gsap.to(button, { duration: 0.5, motionPath: path });
    });
    button.addEventListener("mouseleave", () => {
        gsap.to(button, { duration: 0.5, motionPath: "none" });
    });
});

const inputsAnimation = gsap.timeline({
    defaults: {
        duration: 0.8,
        ease: "bounce.out",
    }
});

inputsAnimation.from("input[type='text'], input[type='email'], input[type='password']", {
    opacity: 0,
    y: 20,
    rotationX: -90,
    rotationY: -90,
    scale: 0.8,
    stagger: 0.1
}).to("input[type='text'], input[type='email'], input[type='password']", {
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    stagger: 0.1
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


