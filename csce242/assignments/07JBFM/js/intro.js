
document.getElementById("btn-click-me").onclick = function() {
  let output = `
    <span class="sun-title">Here comes the sun</span><br><br>
    <span class="sun1">Sun</span><br><br>
    <span class="sun2">Sun</span><br><br>
    <span class="sun3">Sun</span><br><br>
    <span class="sun-last">Here it comes</span>
  `;
  document.getElementById("ST").innerHTML = output;
};

document.querySelector('.box1').onclick = function() {
  document.getElementById('btn-click-me').click();
};

document.getElementById("colorPicker").addEventListener("input", function() {
  const color = this.value;
  document.querySelector('.box2').style.backgroundColor = color;
  document.getElementById("hexCode").innerText = color;
});

document.getElementById("weather-img").onclick = function() {
            this.src = "images/sunny.jpg";
   };