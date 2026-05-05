import gsap from "gsap"
const nav=gsap.timeline()
const b=gsap.timeline()

nav.from(".nav",{
  opacity:0,
  y:-30,
  duration:1,
 
})
nav.from(".nav h2",{
    opacity:0,
    x:-20,
     duration:1,
  
})
nav.from(".nav a", {
  opacity: 0,
  y: -20,
  stagger: 0.2,
  duration: 0.5
})
const t1=gsap.timeline()

t1.from("h1",{
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.5,
}).to("h1",{
    color:"blue",
    duration:1
})
t1.from("h1 span",{
   
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3
});
