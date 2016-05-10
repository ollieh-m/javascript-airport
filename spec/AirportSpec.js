describe("Airport", function() {

	var airport;
	var landedPlane = jasmine.createSpyObj('landed plane', ['isLandedStatus','landed','flying']);
	var flyingPlane = jasmine.createSpyObj('flying plane', ['isLandedStatus','landed','flying']);
	var weather = jasmine.createSpyObj('weather', ['isStormy'])

	beforeEach( function() {
		airport = new Airport(weather);
		landedPlane.isLandedStatus.and.returnValue(true);
		flyingPlane.isLandedStatus.and.returnValue(false);
		weather.isStormy.and.returnValue(false);
	});

	it("Should tell the plane to land", function() {
		airport.land(flyingPlane);
		expect(flyingPlane.landed).toHaveBeenCalled();
	});

	it("Should tell the plane to takeoff", function() {
		airport.land(flyingPlane);
		flyingPlane.isLandedStatus.and.returnValue(true);
		airport.launch(flyingPlane);
		expect(flyingPlane.flying).toHaveBeenCalled();
	});

	it("Should not land a landed plane", function() {
		expect(function(){ 
			airport.land(landedPlane); 
		}).toThrowError('This plane is already landed!');
	});

	it("Should not launch a flying plane", function() {
		expect(function(){
			airport.launch(flyingPlane);
		}).toThrowError('This plane is already airborne!');
	});

	it("Should not launch a plane that isn't already in the airport", function() {
		expect(function(){
			airport.launch(landedPlane);
		}).toThrowError('This plane is not in the airport!');
	});

	describe("Stormy weather...", function() {
		it("Should not launch a plane when the weather is stormy", function() {
			weather.isStormy.and.returnValue(true);
			expect(function(){
				airport.launch(landedPlane);
			}).toThrowError('The weather is too stormy for takeoff!');
		});

		it("Should not land a plane when the weather is stormy", function() {
			weather.isStormy.and.returnValue(true);
			expect(function(){
				airport.land(flyingPlane);
			}).toThrowError('The weather is too stormy to land!');
		});
	});

});





