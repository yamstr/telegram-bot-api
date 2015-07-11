var request = require('request');

var Telegram = function(config) {
	this.config = config || {};
	this.url = 'https://api.telegram.org/bot';
};

Telegram.prototype.request = function(method, params, callback) {
	request({
		url: this.url + this.config.token + '/' + method,
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