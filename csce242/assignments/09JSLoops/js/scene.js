    window.onload = function() {
    const btn = document.getElementById('drawSceneBtn');
    btn.onclick = drawScene;

    const scene = document.getElementById('scene'); // use existing div

    function drawScene() {
        scene.innerHTML = '';
        //  const hour = 20;
        const hour = new Date().getHours();
        let isNight = (hour >= 18 || hour < 6);
        scene.style.background = isNight ? '#111' : '#b3dcee';

        // Sun or moon (already positioned with CSS)
        const sunMoon = document.createElement('div');
        sunMoon.className = isNight ? 'moon' : 'sun';
        scene.appendChild(sunMoon);

        // Clouds (spread evenly across the top)
        for (let i = 0; i < 6; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';
            // Spread clouds horizontally using %
            cloud.style.left = (10 + i * 14) + '%';
            cloud.style.top = '18%';
            scene.appendChild(cloud);
        }

        // Trees (spread evenly along the bottom)
        for (let i = 0; i < 6; i++) {
            const trunk = document.createElement('div');
            trunk.className = 'trunk';
            trunk.style.left = (12 + i * 14) + '%';
            trunk.style.top = '70%';
            scene.appendChild(trunk);

            const leaves = document.createElement('div');
            leaves.className = 'leaves';
            leaves.style.left = (9 + i * 14) + '%'; // align with trunk
            leaves.style.top = '52%'; // lower leaves to sit on trunk
            scene.appendChild(leaves);
        }
    // Create the bird and its parts
    const bird = document.createElement('div');
    bird.className = 'bird' + (isNight ? ' night' : '');

    const wingLeft = document.createElement('div');
    wingLeft.className = 'bird-wing bird-wing-left';
    bird.appendChild(wingLeft);

    // const wingRight = document.createElement('div');
    // wingRight.className = 'bird-wing bird-wing-right';
    // bird.appendChild(wingRight);

    const body = document.createElement('div');
    body.className = 'bird-body';
    bird.appendChild(body);

    const head = document.createElement('div');
    head.className = 'bird-head';
    bird.appendChild(head);

    const beak = document.createElement('div');
    beak.className = 'bird-beak';
    bird.appendChild(beak);

    const eye = document.createElement('div');
    eye.className = 'bird-eye';
    bird.appendChild(eye);

    scene.appendChild(bird);
    }
};
