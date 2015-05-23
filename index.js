'use strict';
module.exports = function (s) {
	if (typeof s !== 'string') {
		throw new Error('expected a string');
	}

	return s.trim().replace(/([0-9]|\.|\,)+([\S]+)?/, '$2');
};
