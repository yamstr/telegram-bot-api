# yamstr-telegram-bot-api

Telegram Bot API Wrapper

## Installation

```
$ npm install yamstr-telegram-bot-api
```

## Example

```javascript
var Telegram = require('yamstr-telegram-bot-api');
var telegram = new Telegram({
	url: 'https://api.telegram.org/bot<token>/'
});

telegram.request('sendMessage', {
	chat_id: 1234567, // Unique identifier for the message recipient
	text: 'Hello, world!' // Text of the message to be sent
}, function(error, response) {
	if (error) {
		console.error(error);
	} else {
		console.log(response);
	}
});
```