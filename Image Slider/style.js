let scrollContainer = document.querySelector(".gallery");
let wow = document.getElementById("gallery");
let backBtn = document.querySelector(".back");
let nextBtn = document.querySelector(".next");
scrollContainer.addEventListener("wheel",(evt)=>{
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        wow.style.scrollBehavior = "auto";
    })
    
    nextBtn.addEventListener("click",()=>{
       wow.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 1800;   
    })
    backBtn.addEventListener("click",()=>{
        wow.style.scrollBehavior="smooth";
        scrollContainer.scrollLeft -= 1800;

}) 
