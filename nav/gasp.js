var tl = gsap.timeline();

tl.from("#nav h2, #nav h3",{
    y:-50,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"elastic.out(1,0.3)"
})
tl.from("#left h1",{
    x:-670,
    duration:0.8,
    opacity:0
})
tl.from("#left button",{
    opacity:0,
    duration:0.5,
    scale:0
})
tl.from("#right",{
    opacity:0,
    duration:0.5,
    scale:0.5,
    rotate:360
})