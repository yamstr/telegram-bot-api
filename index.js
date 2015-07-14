var assert = require('assert');
var async = require('async');
var request = require('request');

var Telegram = function(config) {
	assert(typeof config == 'object', 'Invalid configuration');
	assert(typeof config.token == 'string' && config.token, 'Invalid token');

	this.config = config;
	this.url = 'https://api.telegram.org/bot';
};

Telegram.prototype.request = function(method, params, callback) {
	async.waterfall([
		async.apply(request, {
			url: this.url + this.config.token + '/' + method,
			method: 'POST',
			form: params
		}),
		function(response, body, callback) {
			callback(null, body);
		},
		async.asyncify(JSON.parse)
	], callback);
};

module.exports = Telegram;