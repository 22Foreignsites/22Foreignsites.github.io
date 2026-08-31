// Lightweight hero slideshow
(function(){
  const INTERVAL = 5000; // 5s
  let timer = null;
  let current = 0;

  function qs(sel, root=document){ return root.querySelector(sel); }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  const slideshow = qs('.hero__slideshow');
  if(!slideshow) return;
  const slides = qsa('.hero__slide', slideshow);
  const total = slides.length;

  function show(index){
    slides.forEach((s,i)=>{
      const isActive = i === index;
      s.classList.toggle('active', isActive);
      s.setAttribute('aria-hidden', !isActive);
    });
    current = index;
  }

  function next(){
    show((current + 1) % total);
  }

  function start(){
    stop();
    timer = setInterval(next, INTERVAL);
  }

  function stop(){
    if(timer) { clearInterval(timer); timer = null; }
  }

  // initial
  show(0);
  start();

  // pause on hover/focus
  slideshow.addEventListener('mouseenter', stop);
  slideshow.addEventListener('mouseleave', start);
  slideshow.addEventListener('focusin', stop);
  slideshow.addEventListener('focusout', start);

  // expose controls if needed later
  window._heroSlideshow = { show, next, start, stop };
})();

const lines = document.querySelectorAll(".draw-line");

lines.forEach(line => {
  const length = line.getTotalLength();
  line.style.strokeDasharray = length;
  line.style.strokeDashoffset = length;
});

window.addEventListener("scroll", () => {
  const intro = document.querySelector("#intro");
const memberships = document.querySelector("#memberships");

const start = intro.offsetTop - window.innerHeight * 0.6;
const end = memberships.offsetTop - window.innerHeight * 0.3;

let progress = (window.scrollY - start) / (end - start);
  progress = Math.max(0, Math.min(progress, 1));

  lines.forEach((line, index) => {
    const length = line.getTotalLength();

    const totalLines = lines.length;
    const start = index / totalLines;
    const end = (index + 1) / totalLines;

    let lineProgress = (progress - start) / (end - start);
    lineProgress = Math.max(0, Math.min(lineProgress, 1));

    line.style.strokeDashoffset = length * (1 - lineProgress);
  });
});
