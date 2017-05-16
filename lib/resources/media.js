const _ = require('lodash');
const utils = require('../utils');

/**
 * The /media resource contains the media files you have uploaded to VoiceBase for analysis,
 * as well as transcripts and analytics generated from processing these files.
 */
class Media {
    constructor (api) {
        this._api = api;
        this._baseUrl = `${this._api.config.baseUrl}/${this._api.config.apiVersion}/media`;
    }

    /**
     * Retrieve from the media collection.
     * @param [externalId] A unique identifier in an external system, set in metadata on POST.
     */
    list (externalId) {
        const url = this._baseUrl;
        const requestOptions = _.extend({}, this._api.requestOptions, {
            parameters: {externalId}
        });

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Upload new new media to the service as an attachment or from a url.
     * @param media Media file attached to the request.
     * @param [configuration] A JSON object with configuration options.
     * @param [metadata] Metadata about the file being posted.
     * @param [transcript] Attached transcript.
     */
    upload (media, configuration, metadata, transcript) {
        const url = this._baseUrl;
        const requestOptions = _.extend({}, this._api.requestOptions, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: {media, configuration, metadata, transcript}
        });

        return utils.makeRequest(this._api.client.post, url, requestOptions);
    }

    /**
     * Get this media item and associated analytics.
     * @param mediaId
     */
    get (mediaId) {
        const url = `${this._baseUrl}/${mediaId}`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Delete this media.
     * @param mediaId
     */
    remove (mediaId) {
        const url = `${this._baseUrl}/${mediaId}`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.delete, url, requestOptions);
    }

    /**
     * Upload new configuration, metadata and/or transcript for re-processing of a media document.
     * @param mediaId
     * @param [configuration] A JSON object with configuration options.
     * @param [metadata] Metadata about the file being posted.
     * @param [transcript] Attached transcript.
     */
    update (mediaId, configuration, metadata, transcript) {
        const url = `${this._baseUrl}/${mediaId}`;
        const requestOptions = _.extend({}, this._api.requestOptions, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: {configuration, metadata, transcript}
        });

        return utils.makeRequest(this._api.client.post, url, requestOptions);
    }

    /**
     * Get available transcripts.
     * @param mediaId
     */
    getTranscripts (mediaId) {
        const url = `${this._baseUrl}/${mediaId}/transcript`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get a specific transcript.
     * @param mediaId
     * @param transcriptId
     */
    getTranscript (mediaId, transcriptId = 'latest') {
        const url = `${this._baseUrl}/${mediaId}/transcripts/${transcriptId}`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get progress phases.
     * @param mediaId
     */
    getProgress (mediaId) {
        const url = `${this._baseUrl}/${mediaId}/progress`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get available media URLs.
     * @param mediaId
     */
    getStreams (mediaId) {
        const url = `${this._baseUrl}/${mediaId}/streams`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Redirects to the original version of the file.
     * @param mediaId
     */
    getOriginalFile (mediaId) {
        const url = `${this._baseUrl}/${mediaId}/streams/original`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get the media metadata.
     * @param mediaId
     */
    getMetadata (mediaId) {
        const url = `${this._baseUrl}/${mediaId}/metadata`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Update the media metadata.
     * @param mediaId
     * @param metadata Meta data object
     */
    updateMetadata (mediaId, metadata) {
        const url = `${this._baseUrl}/${mediaId}/metadata`;
        const requestOptions = _.extend({}, this._api.requestOptions, {
            data: metadata
        });

        return utils.makeRequest(this._api.client.put, url, requestOptions);
    }
}

module.exports = Media;