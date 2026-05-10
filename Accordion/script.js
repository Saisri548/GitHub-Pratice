 const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library used for building user interfaces, especially single-page applications.",
  },
  {
    id: 2,
    title: "What is an Accordion?",
    content:
      "An accordion is a UI component that allows users to expand and collapse sections of content.",
  },
  {
    id: 3,
    title: "Why use Tailwind CSS?",
    content:
      "Tailwind CSS helps developers build modern responsive designs quickly using utility classes.",
  },
  {
    id: 4,
    title: "What is JSX?",
    content:
      "JSX is a syntax extension for JavaScript that looks similar to HTML and is used with React.",
  },
  {
    id: 5,
    title: "What are React Hooks?",
    content:
      "Hooks are special functions in React that let you use state and lifecycle features in functional components.",
  },
];
const container=document.body
accordionData.forEach((item)=>{
const c1=document.createElement("div")
c1.className="outline"
c1.style.width="600px"
c1.style.height="200px"

c1.style.backgroundColor="bisque"
c1.style.margin="10px"

 const title = document.createElement("span");
title.textContent =item.title;
const c2=document.createElement("div")
c2.className="answer"
const b2=document.createElement("button")
b2.textContent="+"
b2.style.float="right"
b2.style.marginRight="4px"
b2.style.marginTop="4px"
b2.style.width="5px"
b2.style.borderRadius="1px"
let text_bool = false;
b2.addEventListener("click",()=>{
  
    if(text_bool){
        c2.textContent=""
        text_bool=false
        b2.textContent="+"
    }
    else{
        c2.textContent=item.content
        text_bool=true
          b2.textContent="-"
    }

})

c1.prepend(title)
c1.appendChild(b2)
c1.appendChild(c2)
container.appendChild(c1)

})