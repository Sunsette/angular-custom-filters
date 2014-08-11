describe('Unique function', function () {
	beforeEach(angular.mock.module('customFilters'));
	it('Should convert return an array with no duplicates', function () {
		angular.mock.inject(function (uniqueFilter) {

			expect(uniqueFilter(['Tom', 'Tom', 'Cat'])).toEqual(['Tom', 'Cat']);
		});
	});
});