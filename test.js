'use strict';
var test = require('ava');
var getUnit = require('./');

test('Should be a function', function (t) {
	t.is(typeof getUnit, 'function');

	t.end();
});

test('Should return normal units', function (t) {
	t.is(getUnit('5m'), 'm');
	t.is(getUnit('300cm'), 'cm');
	t.is(getUnit('2CM'), 'CM');

	t.end();
});

test('Should return the right unit when having a dot in the amount', function (t) {
	t.is(getUnit('5.5m'), 'm');
	t.is(getUnit('.4mm'), 'mm');
	t.is(getUnit('3.3000009999009h'), 'h');

	t.end();
});

test('Should return the right unit when having a comma in the amount', function (t) {
	t.is(getUnit('5,5m'), 'm');
	t.is(getUnit(',4mm'), 'mm');
	t.is(getUnit('3,3000009999009h'), 'h');

	t.end();
});

test('Should throw when passing something that isn\'t a string', function (t) {
	[4, undefined, true, null, function () {}].forEach(function (val) {
		t.throws(function () {
			getUnit(val);
		}, TypeError);
	});

	t.end();
});

test('Should trim whitespace', function (t) {
	['  5mm', '5mm   ', '  5mm  '].forEach(function (val) {
		t.is(getUnit(val), 'mm');
	});

	t.end();
});

test('Should return null when there is no unit', function (t) {
	t.is(getUnit('5'), null);
	t.is(getUnit('555'), null);
	t.is(getUnit('1.003'), null);
	t.is(getUnit('1,003'), null);

	t.end();
});

test('Should return a trimmed unit with a space between value and unit', function (t) {
	t.is(getUnit('5,5 m'), 'm');
	t.is(getUnit(',4 mm'), 'mm');
	t.is(getUnit('3,3000009999009 h'), 'h');

	t.end();
});
