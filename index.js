'use strict';
module.exports = function (s) {
	if (typeof s !== 'string') {
		throw new Error('expected a string');
	}

	var unit = s.replace(/([0-9]|\.|\,)+([\S]+)?/, '$2').trim();

	if (!unit) {
		return null;
	}

	return unit;
};
