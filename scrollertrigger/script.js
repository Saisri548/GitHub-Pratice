gsap.registerPlugin(ScrollTrigger)
gsap.from(".box1",{
    y:120,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".box1",
        start:"top 80%",
        markers:true
    }
})
gsap.from(".box2", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".box2",
    start: "top 80%",
    markers: true
  }
});
gsap.to(".box2", {
  backgroundColor: "black",
  duration: 1,
  scrollTrigger: {
    trigger: ".box2",
    start: "top 80%",
    markers: true
  }
});