var tl = gsap.timeline()

tl.from("#nav h2, #nav h3", {
    y: -50,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
    ease:"power1.in",
})
gsap.to("#left button",{
    opacity:1,
    duration:0.5,
    scale:1,
    ease:"power1.out",
    delay:0.3,
    rotate:360
})
tl.from("#left h1",{
    x:-600,
    opacity:0,
    duration:0.8
})
tl.from("#left button",{
    opacity:0,
    duration:0.5,
    scale:0.5,
    rotate:360
})
tl.from("#right",{
    opacity:0,
    duration:0.5,
    scale:0.5,
    ease:"power1.inOut",
    delay:0.3,
})
