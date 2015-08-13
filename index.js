var
	prompt   = require('prompt'),
	threedee = require('./3d')
;

prompt.start();

prompt.get(['text'], function(err, result) {
	if (err) {
		return console.error(err);
	}

	threedee.magic(result, function(err, image) {
		if (!err) {
			return image.launch();
		}

		console.error(err);
	});
});