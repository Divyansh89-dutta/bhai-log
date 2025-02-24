// gsap.registerPlugin(scrollTrigger)

gsap.to("#box",{
    left:"70%",
    duration:5,
    delay:2,
    rotate:360,
    backgroundColor:"yellow",
    scale:1.5,
    repeat:-1,
    yoyo:true
})

gsap.to("#box1",{
    rotate:360,
    duration:2,
    scrollTrigger:{
        trigger:"page-2",
        start:"top 20% ",
        botton:'60%',
        scrub:true,
        pin:true
    }
})