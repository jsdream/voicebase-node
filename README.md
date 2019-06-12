# voicebase-node (v2-beta API)

### [voicebase-node v3 API client is here](https://github.com/jsdream/voicebase-node)

A Node.js client library to work with v2-beta [VoiceBase REST API](http://voicebase.readthedocs.io/en/v2-beta/index.html).

**Note:** This is not the official VoiceBase Node library.

Installation
-------------------------------------------------
Install the module via npm

    npm install voicebase-node@1.0.0 --save

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
|apiVersion|v2-beta|API Version|
|bearerToken||OAuth Bearer token

TODO
-------------------------------------------------
* Write more tests
