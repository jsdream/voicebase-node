# voicebase-node (v3 API)
A Node.js client library to work with v3 [VoiceBase REST API](https://voicebase.readthedocs.io/en/v3/index.html).

**Note:** This is not the official VoiceBase Node library.

Installation
-------------------------------------------------
Install the module via npm

    npm install voicebase-node@2.x.x --save

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
    
For more examples you can check out test folder.

Supported options 
-------------------------------------------------
| Option    | Default value | Description |
| --------  | -----------   | ----------- |
|baseUrl|https://apis.voicebase.com|API Base URL|
|apiVersion|v3|API Version|
|bearerToken||OAuth Bearer token
