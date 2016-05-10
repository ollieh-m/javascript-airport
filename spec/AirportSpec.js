describe("Airport", function() {

	var airport;
	var plane;

	beforeEach( function() {
		airport = new Airport();
		plane = {};
		plane.landed = jasmine.createSpy('landed spy');
		plane.flying = jasmine.createSpy('flying spy');
	});

	it("Should tell the plane to land", function() {
		airport.land(plane);
		expect(plane.landed).toHaveBeenCalled();
	});

	it("Should tell the plane to takeoff", function() {
		airport.land(plane);
		airport.launch(plane);
		expect(plane.flying).toHaveBeenCalled();
	});

});