const container=document.body
let count=0
 const p=document.createElement("p")

for(let i=1;i<=5;i++){
  
  
const img=document.createElement("img")
img.src="star.png"
img.width=50
let clicked=false;
  img.onclick=()=>{
        if(clicked){
        count-=1
        img.src="star.png"
        clicked=false
        }
     else{
       count+=1
        img.src="goldstar.png"
        clicked=true
     }
     p.textContent=count
     }
container.append(img)

}
container.append(p)


container.style.backgroundColor="white"