# yamstr-telegram-bot-api

Telegram Bot API Wrapper

## Installation

```shell
$ npm install yamstr-telegram-bot-api
```

## Example

```javascript
var Telegram = require('yamstr-telegram-bot-api');
var telegram = new Telegram({
	token: '<token>'
});

telegram.request('sendMessage', {
	chat_id: '<chat_id>',
	text: '<text>'
}, function(error, response) {
	if (error) {
		console.error(error);
	} else {
		console.log(response);
	}
});
```