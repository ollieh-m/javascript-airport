function Plane(){};

Plane.prototype.landed = function() {
  this.isLanded = true;
};

Plane.prototype.flying = function() {
  this.isLanded = false;
};

Plane.prototype.isLandedStatus = function() {
	return this.isLanded;
};