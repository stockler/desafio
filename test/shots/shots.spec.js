describe('Shots factory', function() {
	var Shots;

  	beforeEach(angular.mock.module('api.dribble.shots'));

  	beforeEach(inject(function(_Shots_) {
    	Shots = _Shots_;
  	}));

  	it('should exist', function() {
    	expect(Shots).toBeDefined();
  	});

  	describe('.popular()', function() {

    	it('should exist', function() {
      		expect(Shots.popular).toBeDefined();
    	});
  	});
});