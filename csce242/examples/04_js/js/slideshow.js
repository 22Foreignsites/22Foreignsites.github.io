setInterval(()=>{
const currentSlide = document.querySelector("#slideshow :not(.hidden)");
let nextSlide = currentSlide.nextElementSibling;

if(!nextSlide){ //if next slide does not exist then ---->
     nextSlide = document.querySelector("#slideshow img:first-child");
}

currentSlide;IdleDeadline.classLList.add("hidden");
nextSlide.classList.remove("hidden");
},1000);
