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

const options = {
    rootMargin: '0px',
    threshold: 0.5
  };

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    gsap.from("#textContent h1, #textContent h4, #textContent #img-small img, #percentage div, #textContent button", { 
        opacity: 0, 
        y: (index, target) => target.matches("h1, h4") ? -50 : 50, 
        scale: (index, target) => target.matches("#img-small img") ? 0.5 : 1,
        duration: 1, 
        ease: "power4.out", 
        stagger: 0.2 
    });

    gsap.from("#img-content video, #img-content .review-content", { 
        opacity: 0, 
        x: (index, target) => target.matches("video") ? 50 : 0, 
        y: (index, target) => target.matches(".review-content") ? 50 : 0, 
        duration: 1, 
        ease: "power4.out", 
        stagger: 0.2 
    }, "-=0.5");

    gsap.from("#img-content .review-content .fa-star", { 
        opacity: 0, 
        scale: 0, 
        duration: 0.5, 
        ease: "back.out(1.7)", 
        stagger: 0.1 
    }, "-=0.5");

    observer.unobserve(entry.target);
    }
});
}, options);

const targets = document.querySelectorAll("#second-content");
targets.forEach(target => {
observer.observe(target);
});
  
gsap.registerPlugin(ScrollTrigger);

gsap.from(".box", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#third-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#format", {
    x: -100,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: "#third-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#outcome", {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: "#third-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#img1", {
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: "#fourth-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#main-content", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#fourth-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#request", {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: "#fourth-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#main-content h3, #main-content h4", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#fourth-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#img1", {
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: "#fourth-content",
        start: "top 50%",
        end: "bottom 30%",
        scrub: 5
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#feedback h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#fifth-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#feed-user img", {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: "#fifth-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#feed-user h3, #feed-user h4", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#fifth-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});


gsap.from("#feedback", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: "#fifth-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#feed-user", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: "#fifth-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});


gsap.to("#feedback h2", {
    color: "blue",
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "none",
    scrollTrigger: {
        trigger: "#fifth-content",
        start: "top 50%",
        end: "bottom 50%",
        scrub: true
    }
});

gsap.registerPlugin(ScrollTrigger);


gsap.from("#survey h2, #survey h5", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#survey",
        start: "top 70%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#survey button", {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: "#survey",
        start: "top 70%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#survey h4", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: "#survey",
        start: "top 70%",
        end: "bottom 20%",
        scrub: true
    }
});


gsap.to("#survey h2", {
    color: "green",
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "none",
    scrollTrigger: {
        trigger: "#survey",
        start: "top 70%",
        end: "bottom 50%",
        scrub: true
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".student").forEach((student, index) => {
    const img = student.querySelector("img");
    const text = student.querySelector(".text-student");

    gsap.from(img, {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: student,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        }
    });

    gsap.from(text, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: student,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        }
    });

    gsap.from(text.querySelectorAll("h5"), {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
            trigger: student,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        }
    });

    gsap.to(text.querySelectorAll("h5"), {
        color: "red",
        duration: 1,
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
            trigger: student,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        }
    });

    gsap.to(text.querySelectorAll("h3, h4"), {
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: student,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        }
    });
});

gsap.from("#students", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: "#students",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.registerPlugin(ScrollTrigger);

function animateDetail(detail) {
    const img = detail.querySelector("img");
    const name = detail.querySelector("h3");
    const position = detail.querySelector("h4");

    gsap.from(img, {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: detail,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        }
    });

    gsap.from([name, position], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: detail,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        }
    });

    gsap.to([name, position], {
        color: "green",
        duration: 1,
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
            trigger: detail,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 5
        }
    });
}

gsap.utils.toArray(".detail").forEach(animateDetail);

gsap.from("#users", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: "#users",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#promo", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#promo",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#promo h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#promo",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#promo h4", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#promo",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#promo img", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#promo",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#network h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#network",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#network h4", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#network",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#network .content1-network", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#network",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#user-feed h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#user-feed",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#user-feed h4", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#user-feed",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#user-feed .user-network", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#user-feed",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true
    }
});


