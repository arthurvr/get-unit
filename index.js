'use strict';
module.exports = function (s) {
	if (typeof s !== 'string') {
		throw new Error('expected a string');
	}

	var unit = s.trim().replace(/([0-9]|\.|\,)+([\S]+)?/, '$2');

	if (!unit) {
		return null;
	}

	return unit;
};
