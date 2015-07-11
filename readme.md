# get-unit [![Build Status](https://travis-ci.org/arthurvr/get-unit.svg?branch=master)](https://travis-ci.org/arthurvr/get-unit)

> Naive way to check what the unit of a given quantity is

## Installation

```
$ npm install get-unit --save
```

## Usage

```js
var getUnit = require('get-unit');

getUnit('5 mm');
//=> 'mm'

getUnit('1.004 A');
//=> 'A'

getUnit('1,4km');
//=> 'km'

getUnit('.4V');
//=> 'V'

getUnit('4');
//=> null
```

## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
