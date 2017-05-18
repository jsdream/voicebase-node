# voicebase-node
A Node.js client library to work with [VoiceBase REST API](http://voicebase.readthedocs.io/en/v2-beta/index.html).

**Note:** This is not the official VoiceBase Node library.

Installation
-------------------------------------------------
Install the module via npm

    npm install voicebase-node --save

Usage inside your app

    const VoiceBase = require('voicebase-node');

    const api = new VoiceBase({
        bearerToken: 'YOUR_TOKEN_HERE'
    });
    
    api.media.get().then((data) => {
        console.log('Response: ', data);
    }, (err) => {
        console.log('Error: ', err);
    });

Supported options 
-------------------------------------------------
| Option    | Default value | Description |
| --------  | -----------   | ----------- |
|baseUrl|https://apis.voicebase.com|API Base URL|
|connectionTimeout|30000|Set the connection timeout limit (in milliseconds)|
|responseTimeout|80000|Set the response timeout limit (in milliseconds)|
|apiVersion|v2-beta|API Version|
|bearerToken||OAuth Bearer token
