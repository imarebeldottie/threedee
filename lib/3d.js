var
	util    = require('./util'),
	open    = require('open'),
	request = require('request')
;

module.exports = {
	magic: function(options, callback) {
		request.post({
			url      : 'http://www.3dtextmaker.com/cgi-bin/3dtext.pl',
			formData : util.params(options)
		}, function(err, response, body) {
			if (err) {
				return callback(err);
			}

			var src = util.extractSource(body);

			if (!src) {
				return callback('Unable to extract the 3d awesomeness.');
			}

			util.shortenUrl(src, function(err, shortUrl) {
				if (err) {
					return callback(err);
				}

				callback(null, {
					source: shortUrl,
					launch: function() {
						open(shortUrl);
					}
				});
			});
		});
	}
};