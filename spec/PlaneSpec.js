describe("Plane", function() {

  var airport;
  var plane;

  beforeEach( function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("Should switch status to landed", function() {
    plane.landed();
    expect(plane.isLandedStatus()).toEqual(true);
  });

  it("Should switch status to flying", function() {
    plane.flying();
    expect(plane.isLandedStatus()).toEqual(false);
  });

});


