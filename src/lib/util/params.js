var
	defaults = require('lodash.defaults'),
	random   = require('./random')
;

module.exports = function(options) {
	if (typeof options !== 'object' || options === null) {
		options = {};
	}

	var hex = random.hex();

	options = defaults(options, random.font(), {
		font0        : 'default',
		font1        : 'default',
		font2        : 'default',
		font3        : 'default',
		font4        : 'default',
		font5        : 'default',
		red          : hex[0],
		green        : hex[1],
		blue         : hex[2],
		dimensions   : 'default',
		customwidth  : '',
		customheight : '',
		style        : random.animation(),
		speed        : 'Slow',
		height       : 30,
		depth        : 5,
		tiltx        : 0,
		tilty        : 0,
		frames       : 30,
		looping      : '',
		infloops     : true,
		loops        : '',
		text         : 'awesome',
		GoButton     : 'Make+3D+Text%21'
	});

	for (var k in options) {
		if (typeof options[k] !== 'string') {
			options[k] = JSON.stringify(options[k]);
		}
	}

	options.text = options.text.replace(/\s/g, '+');

	return options;
};