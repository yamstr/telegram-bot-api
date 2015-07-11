var request = require('request');

var Telegram = function(config) {
	this.config = config || {};
};

Telegram.prototype.request = function(method, params, callback) {
	request({
		url: this.config.url + method,
		method: 'POST',
		form: params
	}, function(error, response, body) {
		if (callback) {
			try {
				body = JSON.parse(body);
			} catch (e) {
				error = e;
				body = {};
			}

			callback(error, body);
		}
	});
};

module.exports = Telegram;