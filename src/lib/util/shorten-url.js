var GoogleURL = require('google-url');

var googleUrl = new GoogleURL({
	key: 'AIzaSyCMRAGMNuQzleNLwh8Pn9fecMEhKJ4STEw'
});

module.exports = function(src, callback) {
	googleUrl.shorten(src, callback);
};