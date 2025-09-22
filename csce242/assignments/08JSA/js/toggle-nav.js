document.addEventListener("DOMContentLoaded", function() {
	const showPlantLarge = document.getElementById("showPlantLarge");
	const showClockLarge = document.getElementById("showClockLarge");
	const plantSection = document.getElementById("plantSection");
	const clockSection = document.getElementById("clockSection");
	if (showPlantLarge && showClockLarge) {
		showPlantLarge.addEventListener("click", function(e) {
			e.preventDefault();
			plantSection.style.display = "block";
			clockSection.style.display = "none";
		});
		showClockLarge.addEventListener("click", function(e) {
			e.preventDefault();
			plantSection.style.display = "none";
			clockSection.style.display = "block";
		});
	}
});
// My menu 
document.addEventListener("DOMContentLoaded", function() {
	const menuToggle = document.getElementById("menuToggle");
	const menuItems = document.getElementById("menuItems");
	const arrow = document.getElementById("arrow");
	const showPlant = document.getElementById("showPlant");
	const showClock = document.getElementById("showClock");
	const plantSection = document.getElementById("plantSection");
	const clockSection = document.getElementById("clockSection");

	// This hides the menu 
	menuItems.style.display = "none";

	menuToggle.addEventListener("click", function() {
		if (menuItems.style.display === "none") {
			menuItems.style.display = "block";
			arrow.innerHTML = "&#9650;"; 
		} else {
			menuItems.style.display = "none";
			arrow.innerHTML = "&#9660;"
		}
	});

	showPlant.addEventListener("click", function(e) {
		e.preventDefault();
		plantSection.style.display = "block";
		clockSection.style.display = "none";
		menuItems.style.display = "none";
		arrow.innerHTML = "&#9660;";
	});

	showClock.addEventListener("click", function(e) {
		e.preventDefault();
		plantSection.style.display = "none";
		clockSection.style.display = "block";
		menuItems.style.display = "none";
		arrow.innerHTML = "&#9660;";
	});
});
