//Got some of the logic from the internet for the update clock, the rest is my own work

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  if (minutes < 10) minutes = '0' + minutes;
  const timeString = hours + ':' + minutes + ' ' + ampm;
  const clockElem = document.getElementById('digitalClock');
  if (clockElem) clockElem.textContent = timeString;
}

updateClock();
setInterval(updateClock, 60000);



// const images = [
//   "https://dummyimage.com/600x400/000/fff",
//   "https://dummyimage.com/600x500/111/fff",
//   "https://dummyimage.com/600x600/222/fff",
//   "https://dummyimage.com/600x700/333/fff",
//   "https://dummyimage.com/600x800/444/fff",
// ];

// const slider = document.getElementById("imgSlider");
// const displayImg = document.getElementById("displayImg");
// const output = document.getElementById("demo");

// slider.addEventListener("input", function() {
//   const days = parseInt(slider.value);
// if (days === 0) {
//   output.textContent = "You just watered your plant!";
// } else if (days >= 12) {
//   output.textContent = "Your plant is thirsty!";
// } else if (days >= 9) {
//   output.textContent = "Water your plant soon!";
// } else if (days >= 5) {
//   output.textContent = "It's been 2 days. Check the soil.";
// // } else if (days >= 2) {
// //   output.textContent = "It's been 1 day. Still good!";
// }
// });

// // show initial value
// output.innerHTML = slider.value;

// // update when slider moves
// slider.addEventListener("input", function() {
// displayImg.src = images[this.value];
// });

// // adjust slider range automatically
// slider.max = images.length - 1;


const images = [
  "images/aplant.png",
  "images/aplant.png",
  "images/aplant.png",
  "images/bplant.jpg",
  "images/bplant.jpg",
  "images/bplant.jpg",
  "images/cplant.jpeg",
  "images/cplant.jpeg",
  "images/cplant.jpeg",
  "images/cplant.jpeg",
  "images/dplant.webp",
  "images/dplant.webp",
  "images/dplant.webp",

];

const slider = document.getElementById("imgSlider");
const displayImg = document.getElementById("displayImg");
const output = document.getElementById("demo");

slider.max = images.length - 1;

function updateDisplay(value) {
  const days = parseInt(value);
  displayImg.src = images[days];

  if (days === 0) {
    output.textContent = `You just watered your plant! It's been ${days} days.`;
  } else if (days >= 13) {
    output.textContent = `Your plant is thirsty! It's been ${days} days.`;
  } else if (days >= 10) {
    output.textContent = `Water your plant soon! It's been ${days} days.`;
  } else if (days >= 5) {
    output.textContent = `It's been a ${days} days. Check the soil.`;
  } else {
    output.textContent = `It's been ${days} day(s). Still good!`;
  }
}

updateDisplay(slider.value);

slider.addEventListener("input", function() {
  updateDisplay(this.value);
});
