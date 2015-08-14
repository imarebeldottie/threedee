var camelCase = function(str) {
	return str.toLowerCase().replace(/-([a-z])/g, function(match, capture) {
		return capture.toUpperCase();
	});
};

var parse = function(value) {
	try {
		return JSON.parse(value);
	} catch(e) {
		return value;
	}
};

for (var i = 0, l = process.argv.length; i < l; i++) {
	var arg = process.argv[i];

	if (arg[0] === '-') {
		var value = process.argv[i + 1];

		if (!value || value[0] === '-') {
			value = true;
		} else {
			i++;
		}

		module.exports[camelCase(arg.substring(1))] = parse(value);
	}
}