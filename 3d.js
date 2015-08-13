var
	fonts      = require('./fonts'),
	animations = require('./animations'),
	shorten    = require('./shorten'),
	open       = require('open'),
	request    = require('request'),
	defaults   = require('lodash.defaults')
;

module.exports = {
	magic: function(options, callback) {
		var api = this;

		request.post({
			url      : 'http://www.3dtextmaker.com/cgi-bin/3dtext.pl',
			formData : this.util.params(options)
		}, function(err, response, body) {
			if (err) {
				return callback(err);
			}

			var src = api.util.extract(body);

			if (!src) {
				return callback('Unable to extract the 3d awesomeness.');
			}

			shorten(src, function(err, shortUrl) {
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
	},
	util: {
		params: function(options) {
			if (typeof options !== 'object' || options === null) {
				options = {};
			}

			var hex = this.randomHex();

			options = defaults(options, this.font(), {
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
				style        : this.randomAnimation(),
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
		},
		extract: function(body) {
			if (!body) {
				return;
			}

			var idx = body.indexOf('Here Is Your Free 3D');

			if (idx === -1) {
				return;
			}

			body = body.substring(idx);
			idx  = body.indexOf('<IMG SRC="');

			if (idx === -1) {
				return;
			}

			body = body.substring(idx + 10);
			idx  = body.indexOf('"');

			return 'http://www.3dtextmaker.com' + body.substring(0, idx).trim();
		},
		font: function() {
			var
				attr  = {},
				index = Math.floor(Math.random() * fonts.length)
			;

			attr['font' + index] = fonts[index][Math.floor(Math.random() * fonts[index].length)];

			return attr;
		},
		random: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		randomHex: function() {
			return [
				this.random(0, 255).toString(16).toUpperCase(),
				this.random(0, 255).toString(16).toUpperCase(),
				this.random(0, 255).toString(16).toUpperCase()
			];
		},
		randomAnimation: function() {
			return animations[this.random(0, animations.length - 1)];
		}
	}
};