// fetch('json/merch.json')
//   .then(response => response.json())
//   .then(data => {
//     const container = document.getElementById('merch-container');
//     container.innerHTML = ''; // Clear any static content
//     data.forEach(item => {
//       const card = document.createElement('div');
//       card.className = 'merch2-card';
//       card.innerHTML = `
//         <img src="${item.img}" alt="${item.name}" />
//         <div class="merch2-title">${item.name}</div>
//         <div class="merch2-color">${item.Color}</div>
//         <div class="merch2-price">${item.Price}</div>
//       `;
//       container.appendChild(card);
//     });
//   });

//   // merch.js - improved with errors + flexible path
// const JSON_PATHS_TO_TRY = [
//   './json/merch.json', // if you keep a json/ folder
//   './merch.json',      // if merch.json is at the same level as merch.html
//   'json/merch.json',
//   'merch.json'
// ];

// async function loadMerch() {
//   const container = document.getElementById('merch-container');
//   if (!container) {
//     console.error('merch-container element not found in DOM.');
//     return;
//   }

//   let data = null;
//   for (const path of JSON_PATHS_TO_TRY) {
//     try {
//       const res = await fetch(path);
//       if (!res.ok) {
//         // try next path
//         console.warn(`Fetch ${path} failed: ${res.status} ${res.statusText}`);
//         continue;
//       }
//       data = await res.json();
//       console.log('Loaded merch JSON from', path);
//       break;
//     } catch (err) {
//       console.warn(`Fetch ${path} threw:`, err);
//     }
//   }

//   if (!data) {
//     container.innerHTML = '<p class="error">Could not load merch data. Check console for details.</p>';
//     console.error('All fetch attempts failed. Make sure the JSON path is correct and you are serving via http:// (not file://).');
//     return;
//   }

//   container.innerHTML = ''; // clear any static content
//   data.forEach(item => {
//     const card = document.createElement('div');
//     card.className = 'merch2-card';
//     card.innerHTML = `
//       <img src="${item.img}" alt="${item.name}" />
//       <div class="merch2-title">${item.name}</div>
//       <div class="merch2-color">${item.Color}</div>
//       <div class="merch2-price">${item.Price}</div>
//     `;
//     container.appendChild(card);
//   });
// }

// document.addEventListener('DOMContentLoaded', loadMerch);

// merch.js - rewritten to match your teacher's async/DOM style












//this work just letting you know

// const JSON_PATHS_TO_TRY = [
//   './json/merch.json',
//   './merch.json',
//   'json/merch.json',
//   'merch.json'
// ];

// const getMerch = async () => {
//   const url = "https://22foreignsites.github.io/csce242/projects/part6/json/merch.json";

//   for (const path of JSON_PATHS_TO_TRY) {
//     try {
//       const res = await fetch(path);
//       if (!res.ok) {
//         console.warn(`Fetch ${path} failed: ${res.status} ${res.statusText}`);
//         continue;
//       }
//       data = await res.json();
//       console.log('Loaded merch JSON from', path);
//       break;
//     } catch (error) {
//       console.warn(`Fetch ${path} threw:`, error);
//     }
//   }

//   if (!data) {
//     console.log('sorry'); 
//   }

//   return data;
// };

// const showMerch = async () => {
//   const merch = await getMerch();
//   const container1 = document.getElementById('merch-container');
//   const container2 = document.getElementById('merch-container2');

//   if (!container1 && !container2) {
//     console.error('No merch container elements found in DOM.');
//     return;
//   }

//   if (!merch) {
//     if (container1) container1.innerHTML = '<p class="error">Could not load merch data. Check the console for details.</p>';
//     if (container2) container2.innerHTML = '<p class="error">Could not load merch data. Check the console for details.</p>';
//     return;
//   }

//   if (container1) container1.innerHTML = '';
//   if (container2) container2.innerHTML = '';

//   merch.forEach(item => {
//     const section = document.createElement('section');
//     section.classList.add('merch2-card');

//     // heading
//     const h3 = document.createElement('h3');
//     h3.innerText = item.name;
//     section.append(h3);

//     // color
//     const colorP = document.createElement('p');
//     colorP.innerText = `Color: ${item.Color}`;
//     section.append(colorP);

//     // price
//     const priceP = document.createElement('p');
//     priceP.innerText = `Price: ${item.Price}`;
//     section.append(priceP);

//     if (item.img) {
//       const img = document.createElement('img');
//       img.alt = item.name;
//       img.src = item.img;
//       img.classList.add('merch-image');
//       section.insertBefore(img, h3);
//     }

//     if (container1) container1.append(section.cloneNode(true));
//     if (container2) container2.append(section);
//   });
// };

// document.addEventListener('DOMContentLoaded', showMerch);

const JSON_PATHS_TO_TRY = [
  './json/merch.json',
  './merch.json',
  'json/merch.json',
  'merch.json'
];

const getMerch = async () => {
  const url = "https://22foreignsites.github.io/csce242/projects/part6/json/merch.json";

  for (const path of JSON_PATHS_TO_TRY) {
    try {
      const res = await fetch(path);
      if (!res.ok) {
        console.warn(`Fetch ${path} failed: ${res.status} ${res.statusText}`);
        continue;
      }
      data = await res.json();
      console.log('Loaded merch JSON from', path);
      break;
    } catch (error) {
      console.warn(`Fetch ${path} threw:`, error);
    }
  }

  if (!data) {
    console.log('sorry'); 
  }

  return data;
};

// const showMerch = async () => {
//   const merch = await getMerch();
//   const container1 = document.getElementById('merch-container');
//   const container2 = document.getElementById('merch-container2');

//   if (!container1 && !container2) {
//     console.error('No merch container elements found in DOM.');
//     return;
//   }

//   if (!merch) {
//     if (container1) container1.innerHTML = '<p class="error">Could not load merch data. Check the console for details.</p>';
//     if (container2) container2.innerHTML = '<p class="error">Could not load merch data. Check the console for details.</p>';
//     return;
//   }

//   if (container1) container1.innerHTML = '';
//   if (container2) container2.innerHTML = '';

//   merch.forEach(item => {
//     const section = document.createElement('section');
//     section.classList.add('merch2-card');

//     // heading
//     const h3 = document.createElement('h3');
//     h3.innerText = item.name;
//     section.append(h3);

//     // color
//     const colorP = document.createElement('p');
//     colorP.innerText = `Color: ${item.Color}`;
//     section.append(colorP);

//     // price
//     const priceP = document.createElement('p');
//     priceP.innerText = `Price: ${item.Price}`;
//     section.append(priceP);

//     if (item.img) {
//       const img = document.createElement('img');
//       img.alt = item.name;
//       img.src = item.img;
//       img.classList.add('merch-image');
//       section.insertBefore(img, h3);
//     }

//     if (container1) container1.append(section.cloneNode(true));
//     if (container2) container2.append(section);
//   });
// };

// document.addEventListener('DOMContentLoaded', showMerch);

const showMerch = async () => {
  const merch = await getMerch();
  const container1 = document.getElementById('merch-container');
  const container2 = document.getElementById('merch-container2');

  if (!merch || (!container1 && !container2)) {
    console.error('Could not load merch data or containers.');
    return;
  }

  container1.innerHTML = '';
  container2.innerHTML = '';

  //I split the data into two half containers
  const mid = Math.ceil(merch.length / 2);
  const firstRow = merch.slice(0, mid);
  const secondRow = merch.slice(mid);

  const createCard = (item) => {
    const section = document.createElement('section');
    section.classList.add('merch2-card');

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;
    img.classList.add('merch-image');
    section.append(img);

    const h3 = document.createElement('h3');
    h3.innerText = item.name;
    section.append(h3);

    const colorP = document.createElement('p');
    colorP.innerText = `Color: ${item.Color}`;
    section.append(colorP);

    const priceP = document.createElement('p');
    priceP.innerText = `Price: ${item.Price}`;
    section.append(priceP);

    return section;
  };

  firstRow.forEach(item => container1.append(createCard(item)));
  secondRow.forEach(item => container2.append(createCard(item)));
};

//  `reviews` array):
    // if (Array.isArray(item.reviews)) {
    //   const ul = document.createElement('ul');
    //   item.reviews.forEach(review => {
    //     const li = document.createElement('li');
    //     li.innerText = review;
    //     ul.append(li);
    //   });
    //   section.append(ul);
    // }

document.addEventListener('DOMContentLoaded', showMerch);