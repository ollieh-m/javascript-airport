function Weather() {
};

Weather.prototype.isStormy = function() {
	var indicator = Math.floor((Math.random() * 10) + 1);
	if (indicator > 7) {
		return true;
	} else {
		return false;
	};
};

