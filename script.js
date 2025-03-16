// Riot

var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x - 10 + "px"
    crsr.style.top = dets.y - 10 + "px"
    crsrBlur.style.left = dets.x - 250 + "px"
    crsrBlur.style.top = dets.y - 250 + "px"
    // console.log(dets)
})

var h4all = document.querySelectorAll("#nav h4")

h4all.forEach(function (elem) {
    console.log(elem)
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 4
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    // duration:0.5,
    // delay: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    // stagger:0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})

gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    // stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 35%",
        end: "top 25%",
        scrub: 3
    }
})

gsap.to("#colon2", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end: "top 85%",
        scrub: 3
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    },
})

// Riot