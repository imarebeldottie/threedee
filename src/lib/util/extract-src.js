module.exports = function(body) {
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
};