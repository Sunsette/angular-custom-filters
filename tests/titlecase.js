describe('Title case function', function () {
	beforeEach(angular.mock.module('customFilters'));
	it('Should convert words separated by a space title case', function () {
		angular.mock.inject(function (titlecaseFilter) {

			expect(titlecaseFilter('HeLlo wOrLd')).toEqual('Hello World');
		});
	});

	it('Should convert words separated by a hyphen to title case', function () {
		angular.mock.inject(function (titlecaseFilter) {
			expect(titlecaseFilter('MaRy-jaNe')).toEqual("Mary-Jane");
		});
	});
});