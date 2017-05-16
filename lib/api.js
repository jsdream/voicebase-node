const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const RestClient = require('node-rest-client').Client;

class VoiceBaseAPI {
    constructor (config) {
        this.requestOptions = {
            headers: {}
        };
        this.config = _.extend({}, require('./config'), config);

        /**
         * Specify default request configuration options
         */
        _.extend(this.requestOptions, {
            requestConfig: {
                timeout: this.config.connectionTimeout
            },
            responseConfig: {
                timeout: this.config.responseTimeout
            },
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'VoiceBase Nodejs/' + require('../package.json').version,
                'Authorization': `Bearer ${this.config.bearerToken}`
            }
        });

        /**
         * Init Rest Client.
         */
        this.client = new RestClient(this.requestOptions);

        /**
         * Load Resources.
         */
        this._loadResources();
    }

    /**
     * Populates the API object with the resources.
     */
    _loadResources () {
        /**
         * Read all files from ./resources and add them to this object
         * ex: ./resources/media.js becomes resources.media
         */
        const resourcesRoot = path.join(__dirname, 'resources');

        fs.readdirSync(resourcesRoot).forEach((file) => {
            const resourceName = file.match(/(.*)\.js/)[1];
            const ResourceClass = require(resourcesRoot + '/' + file);

            this[resourceName] = new ResourceClass(this);
        });
    }
}

module.exports = VoiceBaseAPI;