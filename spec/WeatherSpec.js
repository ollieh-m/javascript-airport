describe("Weather", function() {

	var weather;

	beforeEach( function() {
		weather = new Weather();
	});

	it("isStormy() returns true or false", function() {
		expect([true,false]).toContain(weather.isStormy());
	});


});