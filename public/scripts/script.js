function navbar() {
	var topnav = document.getElementById('topnav');
	if (topnav.className === "navbar") {
		topnav.className += " responsive";
	} else {
		topnav.className = "navbar";
	};
};