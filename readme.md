# get-unit [![Build Status](https://travis-ci.org/arthurvr/get-unit.svg?branch=master)](https://travis-ci.org/arthurvr/get-unit)

> Easy way to check what the unit of a givin quantity is

## Installation

```
$ npm install get-unit --save
```

## Usage

```js
var getUnit = require('get-unit');

getUnit('5mm');
//=> 'mm'

getUnit('1.004A');
//=> 'A'

getUnit('1,4km');
//=> 'km'

getUnit('.4V');
//=> 'V'

getUnit('4');
//=> ''
```

## License

MIT © Arthur Verschaeve
