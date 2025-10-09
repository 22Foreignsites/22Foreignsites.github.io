document.getElementById("arrow-prev").onlick = (event) =>{
    event.preventDefualt();
    const currentSlide = document.querySelector("#slideshow img:not(.hidden)");
    const prevSlide = currentSlide.previousElementSibling;

    if(!prevSlide){
        prevSlide = document.querySelector("#slideshow img:last-child");
    }

    currentSlide.classList.add("hidden");
    prevSlide.classList.remove("hidden");
};

document.getElementById("arrow-next").onclick = (event) =>{
    event.preventDefault();
    const currentSlide = document.querySelector("#slideshow img:not(.hidden)");
    const nextSlide = currentSlide.nextElementSibling;

    if(!nextSlide){
        nextSlide = document.querySelector("#slideshow img:first-child");
    }

};