var value = require('./value');

module.exports = function() {
	return [
		value(0, 255).toString(16).toUpperCase(),
		value(0, 255).toString(16).toUpperCase(),
		value(0, 255).toString(16).toUpperCase()
	];
};