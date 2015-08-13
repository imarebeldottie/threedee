var
	fonts = require('../../styles/fonts'),
	value = require('./value');

module.exports = function() {
	var
		attr  = {},
		index = value(0, fonts.length)
	;

	attr['font' + index] = fonts[index][value(0, fonts[index].length)];

	return attr;
};