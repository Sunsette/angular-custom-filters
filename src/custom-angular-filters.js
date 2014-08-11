angular.module('customFilters', []).filter('reverse', function () {
	return function (input) {
		var i, output = '';

		if (angular.isString(input)) {
			for (i = 0; i < input.length; i++) {
				output = input.charAt(i) + output;
			}
			return output;
		} else {
			return input;
		}

	};
}).filter('titlecase', function () {
	return function (input) {
		var i, output = '';

		if (angular.isString(input)) {
			for (i = 0; i < input.length; i++) {

				if (i === 0 || input.charAt(i - 1) === " " || input.charAt(i - 1) === "-") {
					output = output + input.charAt(i).toUpperCase();
				} else {
					output = output + input.charAt(i).toLowerCase();
				}
			}
			return output;

		} else {
			return input;
		}
	};
}).filter('unique', function () {
	return function (input) {
		var i, j;
		var output = [];
		var currentWord = "";
		var addToArray = true;

		if (angular.isArray(input)) {
			for (i = 0; i < input.length; i++) {
				addToArray = true;
				for (j = 0; j < input.length; j++) {
					if (input[i] === input[j]) {
						if (i !== j) {
							addToArray = false;
						} else {
							addToArray = true;
						}
					}
				}
				if (addToArray) {
					output.push(input[i]);
				}

			}

			return output;

		} else {
			return input;
		}

	};
});