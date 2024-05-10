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

Shery.imageMasker("#videoScroll", {
    mouseFollower: true,
    text: "Experts",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 10,
});


Shery.textAnimate("#nav h1" , {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

var tl = gsap.timeline();

tl.from('#nav h1', {
    opacity: 0,
    x: -200,
    stagger: 0.1,
    duration: 1.5,
    ease: 'elastic.out(1, 0.8)',
});

tl.from('#nav2 h3, #nav3', {
    opacity: 0,
    y: -200,
    stagger: 0.1,
    duration: 1.5,
    ease: 'power4.out',
}, "-=1.2");

tl.from('#login, #sign', {
    x: 200,
    opacity: 0,
    stagger: 0.1,
    duration: 1.5,
    ease: 'bounce.out',
}, "-=1");

tl.from('#content', {
    y: 150,
    stagger: 0.1,
    duration: 1.5,
    ease: 'power2.out',
}, "-=1");

tl.from('#first-text', {
    y: -150,
    stagger: 0.1,
    duration: 1.5,
    opacity: 0,
    ease: 'back.out(1.7)',
}, "-=1");

tl.from('#second-text1', {
    x: '-50vw',
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
}, "-=1");

tl.from('#second-text2', {
    x: '50vw',
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
}, "-=1");

gsap.set('body', { force3D: true, perspective: 1000, backfaceVisibility: 'hidden' });
gsap.set(['#nav h1', '#nav2 h3, #nav3', '#login, #sign', '#content', '#first-text', '#second-text1', '#second-text2'], { willChange: 'transform' });
gsap.set('svg', { visibility: 'hidden', shapeRendering: 'auto' });


gsap.utils.toArray('.elem').forEach((elem, index) => {

    gsap.from(elem, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: elem,
            start: 'top 100%',
            end: 'bottom 20%',
            scrub: 5,
        }
    });

    gsap.from(elem.querySelector('.overlay2'), {
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
            trigger: elem,
            start: 'top 100%',
            end: 'bottom 20%',
            scrub: 5,
        }
    });
});
gsap.set('body', { perspective: 2000, backfaceVisibility: 'hidden' });


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.block').forEach((block, index) => {
    const direction = index % 2 === 0 ? -200 : 200;

    gsap.from(block, {
        opacity: 0,
        x: direction,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: block,
            start: 'top 180%',
            end: 'bottom 20%',
            scrub: 5,
        }
    });

    gsap.from(block.querySelector('.overlay'), {
        opacity: 0,
        y: direction,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: block,
            start: 'top 250%',
            end: 'bottom 20%',
            scrub: 5,
        }
    });
});
gsap.set('body', { perspective: 2000, backfaceVisibility: 'hidden' });


gsap.registerPlugin(ScrollTrigger);

gsap.from("#head1", {
    opacity: 0,
    x: 200,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#head1",
        start: "top 100%",
        end: "bottom 50%",
        scrub: 5
    }
});

gsap.from("#head2", {
    opacity: 0,
    x: -500,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#head2",
        start: "top 100%",
        end: "bottom 50%",
        scrub: 5
    }
});

gsap.from("#head3", {
    opacity: 0,
    x: 200,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#head3",
        start: "top 100%",
        end: "bottom 50%",
        scrub: 5
    }
});

gsap.from("#pageContent button", {
    opacity: 0,
    y: 150,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#pageContent",
        start: "top 100%",
        end: "bottom 50%",
        scrub: 5
    }
});

gsap.from("#head4", {
    opacity: 0,
    x: 150,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#head4",
        start: "top 100%",
        end: "bottom 50%",
        scrub: 5
    }
});

gsap.set("body", { perspective: 2000, backfaceVisibility: "hidden" });

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".e").forEach((element, index) => {
    gsap.fromTo(element, {
        opacity: 0,
        y: 100,
        scale: 0.8
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
            trigger: element,
            start: "top 200%",
            end: "bottom 20%",
            scrub: true
        }
    });
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


