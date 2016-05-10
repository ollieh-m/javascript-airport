function Airport(){};

Airport.prototype.land = function(plane){
  
  if (plane.isLanded) {
    throw new Error("This plane is already landed!");
  } else {
    plane.landed();
  }
};

Airport.prototype.launch = function(plane){
  plane.flying();
};