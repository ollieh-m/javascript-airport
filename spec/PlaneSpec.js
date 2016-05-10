describe("Plane", function() {

  var airport;
  var plane;

  beforeEach( function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("Should be able to land", function() {
    plane.landed();
    expect(plane.isLanded).toEqual(true);
  });

});


