const voicebase = require('../index');

global.expect = require('chai').expect;

global.api = new voicebase({
    bearerToken: 'BEARER TOKEN HERE TO RUN TESTS'
});