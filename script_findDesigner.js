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

Shery.makeMagnet("#nav1 h2, #nav h3" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.imageMasker("#videoScroll", {
    mouseFollower: true,
    text: "Experts",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 10,
});


Shery.textAnimate("#nav1 h2" , {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.timeline()
    .from("#content1", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out"
    })
    .from("#content1 h2", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2
    })
    .from("#content1 h1", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.2
    }, "-=0.5")
    .from("#content1 #p1", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.2
    }, "-=0.5");

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
    .from("#nav #nav1 h2", { color: "red", duration: 1, ease: "back.out(1.7)", delay: -0.6 })
    .from("#nav2 #searchBox input", { backgroundColor: "white", duration: 1, ease: "back.out(1.7)", delay: -0.8 })

gsap.registerPlugin(ScrollTrigger);

const initialWidth = "10%";
const finalWidth = "100%";

const tlVideoWidth = gsap.timeline({
    scrollTrigger: {
    trigger: "#videoContainer",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 2
    }
});

tlVideoWidth.to("#videoContainer video", {
    width: finalWidth,
    duration: 1.5,
    ease: "power4.out"
});

const tlParagraph = gsap.timeline({
    scrollTrigger: {
    trigger: "#videoContainer",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 2
    }
});

tlParagraph.from("#paragraphContainer", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
})
.from("#paragraphContainer h2", {
    scale: 0.5,
    rotation: -10,
    duration: 1,
    ease: "back.out(1.7)"
}, "-=0.5")
.from("#paragraphContainer p", {
    opacity: 0,
    duration: 1,
    stagger: 0.2
}, "-=0.5");

gsap.to("#videoContainer button", {
    backgroundColor: "#ff5733",
    color: "#ffffff",
    scrollTrigger: {
    trigger: "#videoContainer",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 2
    }
});

gsap.set("#videoContainer video", { width: initialWidth });

gsap.registerPlugin(ScrollTrigger);

const initialWidth1 = "10%";
const finalWidth1 = "100%";

const tlVideoWidth1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#videoContainer1",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 2
  }
});

tlVideoWidth1.to("#videoContainer1 video", {
  width: finalWidth1,
  duration: 1.5,
  ease: "power4.out"
});

const tlParagraph1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#videoContainer1",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 2
  }
});

tlParagraph1.from("#paragraphContainer1", {
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out"
})
.from("#paragraphContainer1 h2", {
  scale: 0.5,
  rotation: -10,
  duration: 1,
  ease: "back.out(1.7)"
}, "-=0.5")
.from("#paragraphContainer1 p", {
  opacity: 0,
  duration: 1,
  stagger: 0.2
}, "-=0.5");

gsap.to("#videoContainer1 button", {
  backgroundColor: "#ff5733",
  color: "#ffffff",
  scrollTrigger: {
    trigger: "#videoContainer1",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 2
  }
});

gsap.set("#videoContainer1 video", { width: initialWidth1 });
gsap.registerPlugin(ScrollTrigger);

const tlFeedback = gsap.timeline({
  scrollTrigger: {
    trigger: "#feedback",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 2
  }
});

tlFeedback.from("#content3 h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power4.out"
})
.from("#name", {
  opacity: 0,
  x: -50,
  duration: 1,
  ease: "power4.out"
})
gsap.registerPlugin(ScrollTrigger);

const tlPromo = gsap.timeline({
    scrollTrigger: {
        trigger: "#promo",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true
    }
});

tlPromo.from("#promo h2", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power4.out"
})
.from(".proContent", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
})
.from("#pro", {
    opacity: 0,
    scale: 0.5,
    rotation: -180,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)"
})
.to("#promo h2", {
    color: "#ff0000",
    duration: 0.5,
    repeat: -1,
    ease: "none"
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


