
const cars = [
  {
    name: "DodgeViper",
    before: "dv.jpg",
    after: "images/sdv.mp4",
    popup: "images/dv2.jpeg",
    desc: "The Dodge Viper is an iconic American sports car known for its bold design and raw power. With its massive V10 engine, aggressive styling, and thrilling performance, the Viper delivers an unforgettable driving experience. It's a true enthusiast's car—uncompromising, fast, and a favorite among car lovers for its unique character and racing pedigree."
  },
  {
    name: "SuperFast",
    before: "812.jpg",
    after: "images/ssf.mp4",
    popup: "images/8122.webp",
    desc: "The Ferrari 812 Superfast is a masterpiece of Italian engineering, boasting a naturally aspirated V12 engine that delivers exhilarating speed and a spine-tingling soundtrack. With its elegant design, advanced aerodynamics, and razor-sharp handling, the 812 Superfast is the ultimate grand tourer for those who crave both luxury and performance."
  },
  {
    name: "Ford",
    before: "fgt.webp",
    after: "images/sfg.mp4",
    popup: "images/fgt2.jpg",
    desc: "The Ford GT is a modern icon, blending cutting-edge technology with racing heritage. Its carbon fiber construction, active aerodynamics, and twin-turbo V6 engine make it a true supercar. Inspired by the legendary Le Mans-winning GT40, the 2017 GT offers breathtaking speed, precision, and exclusivity.."
  },
  {
    name: "Prius",
    before: "prius.webp",
    after: "images/spr.mp4",
    popup: "images/prius2.jpg",
    desc: "The Toyota Prius continues its legacy as a leader in hybrid technology. With a sleek new design, improved fuel efficiency, and advanced safety features, the latest Prius is perfect for eco-conscious drivers. It combines practicality, reliability, and innovation, making it a smart choice for the future of driving."
  }
];

//The elements
const gallery = document.getElementById('car-gallery');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupImg = document.getElementById('popup-img');
const popupVideo = document.getElementById('popup-video');
const popupText = document.getElementById('popup-text');
const closeBtn = document.getElementById('close');

// This creates the cards
cars.forEach(car => {
  const card = document.createElement('div');
  card.className = 'car-card';
  card.innerHTML = `
    <img src="images/${car.before}" alt="${car.name}">
    <div class="hover-label">Please drive the ${car.name}</div>
  `;

  const img = card.querySelector('img');

  // This is the popup once i click it 
  card.onclick = () => {
    popupTitle.textContent = `More about the ${car.name} `;
    popupText.textContent = car.desc || "";
    const popupSrc = car.popup;

    if (popupSrc && popupSrc.match(/\.mp4$/)) {
      popupImg.style.display = 'none';
      popupVideo.style.display = 'block';
      popupVideo.src = popupSrc;
      popupVideo.load();
    } else {
      popupVideo.style.display = 'none';
      popupImg.style.display = 'block';
      popupImg.src = popupSrc || '';
    }

    popup.classList.remove('hidden');
    popup.style.display = 'block';
  };

  // Shows the video
  card.onmouseenter = () => {
    const afterSrc = car.after;
    if (afterSrc && afterSrc.match(/\.mp4$/)) { //this check if its a video, this i used chat for but I think it doesn't help becuase anything else doesn't work so i had to use mp4s
      img.style.display = 'none';
      let video = card.querySelector('video');
      if (!video) {
        video = document.createElement('video');
        video.src = afterSrc;
        video.controls = true;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.style.maxWidth = '100%';
        card.insertBefore(video, card.querySelector('.hover-label'));
      }
      video.style.display = 'block';
      video.currentTime = 0;
      video.play();
    } else if (afterSrc) {
      img.src = afterSrc;
    }
  };

  card.onmouseleave = () => {
    img.style.display = 'block';
    img.src = `images/${car.before}`;
    const video = card.querySelector('video');
    if (video) {
      video.pause();
      video.style.display = 'none';
    }
  };

  gallery.appendChild(card);
});

// Close popup
closeBtn.onclick = () => {
  popup.classList.add('hidden');
  popup.style.display = 'none';
  popupVideo.pause();
};