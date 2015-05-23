'use strict';
var getUnit = require('./');
var assert = require('assert');

it('Should be a function', function () {
	assert.strictEqual(typeof getUnit, 'function');
});

it('Should return normal units', function () {
	assert.equal(getUnit('5m'), 'm');
	assert.equal(getUnit('300cm'), 'cm');
	assert.equal(getUnit('2CM'), 'CM');
});

it('Should return the right unit when having a dot in the amount', function () {
	assert.equal(getUnit('5.5m'), 'm');
	assert.equal(getUnit('.4mm'), 'mm');
	assert.equal(getUnit('3.3000009999009h'), 'h');
});

it('Should return the right unit when having a comma in the amount', function () {
	assert.equal(getUnit('5,5m'), 'm');
	assert.equal(getUnit(',4mm'), 'mm');
	assert.equal(getUnit('3,3000009999009h'), 'h');
});

it('Should throw when passing something that isn\'t a string', function () {
	[4, undefined, true, null, function () {}].forEach(function (val) {
		assert.throws(function () {
			getUnit(val);
		});
	});
});

it('Should trim whitespace', function () {
	['  5mm', '5mm   ', '  5mm  '].forEach(function (val) {
		assert.strictEqual(getUnit(val), 'mm');
	});
});

it('Should return an empty string when there is no unit', function () {
	assert.strictEqual(getUnit('5'), '');
	assert.strictEqual(getUnit('555'), '');
	assert.strictEqual(getUnit('1.003'), '');
});
