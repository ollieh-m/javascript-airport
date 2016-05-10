describe("Airport", function() {

	var airport;
	var plane;

	beforeEach( function() {
		airport = new Airport();
		plane = new Plane();
	});

	it("Should tell the plane to land", function() {
		plane.landed = jasmine.createSpy('landed spy');
		airport.land(plane);
		expect(plane.landed).toHaveBeenCalled();
	});

});