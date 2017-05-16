const _ = require('lodash');
const utils = require('../utils');

/**
 * The /profile resource contains user profile information, and get can be used to manage your Bearer tokens.
 */
class Profile {
    constructor (api) {
        this._api = api;
        this._baseUrl = `${this._api.config.baseUrl}/${this._api.config.apiVersion}/profile`;
    }

    /**
     * Returns all current Api keys for current user.
     */
    getKeys () {
        const url = `${this._baseUrl}/keys`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get information about specific Api key.
     * @param keyId
     */
    getKey (keyId) {
        const url = `${this._baseUrl}/keys/${keyId}`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Create a new Api key for the current user.
     * @param key Key data to create
     */
    createKey (key) {
        const url = `${this._baseUrl}/keys`;
        const requestOptions = _.extend({}, this._api.requestOptions, {
            data: key
        });

        return utils.makeRequest(this._api.client.post, url, requestOptions);
    }

    /**
     * Delete and revoke this Api key.
     * @param keyId
     */
    deleteKey (keyId) {
        const url = `${this._baseUrl}/keys/${keyId}`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.delete, url, requestOptions);
    }
}

module.exports = Profile;