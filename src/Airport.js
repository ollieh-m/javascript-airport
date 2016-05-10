function Airport(){};

Airport.prototype.land = function(plane){
	plane.landed();
};

Airport.prototype.launch = function(plane){
  plane.flying();
};