var tl = gsap.timeline();

tl.to("#full",{
    transform:"translateY(0)",
    duration:0.7,
    ease:"power1.out",
})
tl.from("#full h2",{
    y:-80,
    opacity:0,
    stagger:0.5,
    ease:"bounce.out",
})

tl.pause()
document.querySelector("#menu").addEventListener('click',function(){
    tl.play()
})
document.querySelector(".close").addEventListener('click',function(){
    tl.reverse()
})
