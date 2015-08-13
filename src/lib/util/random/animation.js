var
	animations = require('../../styles/animations'),
	value      = require('./value')
;

module.exports = function() {
	return animations[value(0, animations.length - 1)];
};