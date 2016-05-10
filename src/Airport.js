function Airport(weather){
	this.docked = [];
  this.weather = weather;
};

Airport.prototype.land = function(plane){
  if (this.weather.isStormy()) {
    throw new Error("The weather is too stormy to land!")
  };
  if (plane.isLandedStatus()) {
    throw new Error("This plane is already landed!");
  }; 
  plane.landed();
  this.docked.push(plane);
};

Airport.prototype.launch = function(plane){
  if (this.weather.isStormy()) {
    throw new Error("The weather is too stormy for takeoff!")
  };
  if (!(plane.isLandedStatus())) {
  	throw new Error("This plane is already airborne!");
  };
  if (!(this.docked.includes(plane))) {
  	throw new Error("This plane is not in the airport!");
  };
  plane.flying();
};

