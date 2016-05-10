describe("Airport", function() {

	var airport;
	var airportB;
	var plane;

	beforeEach( function() {
		airport = new Airport();
		airportB = new Airport();
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

	it("Should not land a landed plane", function() {
		var landedPlane = jasmine.createSpyObj('landed plane', ['isLanded']);
		landedPlane.isLanded.and.returnValue(true);
		expect(function(){ 
			airportB.land(landedPlane); 
		}).toThrowError('This plane is already landed!');
	});

});





