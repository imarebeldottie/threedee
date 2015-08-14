var
	util     = require('./lib/util'),
	threedee = require('./lib/3d')
;

threedee.magic(util.arguments, function(err, image) {
	if (!err) {
		return image.launch();
	}

	console.error(err);
});