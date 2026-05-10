const container=document.body

const c1=document.createElement("input")
c1.type="range"
c1.min=0
c1.max=255
c1.id="slider"
const p1=document.createElement("p")
p1.textContent = 0;

container.appendChild(c1)
container.appendChild(p1)

const c2=document.createElement("input")
c2.type="range"
c2.min=0
c2.max=255
c2.id="slider"
const p2=document.createElement("p")
p2.textContent = 0;

container.appendChild(c2)
container.appendChild(p2)

const c3=document.createElement("input")
c3.type="range"
c3.min=0
c3.max=255
c3.id="slider"
const p3=document.createElement("p")
p3.textContent = 0;

container.appendChild(c3)
container.appendChild(p3)
function updateColor(){
    p1.textContent=c1.value
    p2.textContent=c2.value
    p3.textContent=c3.value
    container.style.backgroundColor=`rgb(${c1.value},${c2.value},${c3.value})`
}
c1.addEventListener("input", updateColor);
c2.addEventListener("input", updateColor);
c3.addEventListener("input", updateColor);

