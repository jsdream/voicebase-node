const _ = require('lodash');
const utils = require('../utils');

/**
 * The /definitions resource contains reference data that can be used in processing,
 * including keyword or phrase spotting groups, custom vocabularies, or predictive models.
 */
class Definitions {
    constructor (api) {
        this._api = api;
        this._baseUrl = `${this._api.config.baseUrl}/${this._api.config.apiVersion}/definitions`;
    }

    /**
     * Get definition types for keywords.
     */
    getDefinitionTypesForKeywords () {
        const url = `${this._baseUrl}/keywords`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get all defined keyword groups.
     */
    getAllKeywordGroups () {
        const url = `${this._baseUrl}/keywords/groups`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get the keyword group.
     * @param groupId
     */
    getKeywordGroup (groupId) {
        const url = `${this._baseUrl}/keywords/groups/${groupId}`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Create or update group from a set of keywords.
     * @param groupId
     * @param group
     */
    createOrUpdateKeywordGroup (groupId, group) {
        const url = `${this._baseUrl}/keywords/groups/${groupId}`;
        const requestOptions = _.extend({}, this._api.requestOptions, {
            data: group
        });

        return utils.makeRequest(this._api.client.put, url, requestOptions);
    }

    /**
     * Delete this keyword group.
     * @param groupId
     */
    deleteKeywordGroup (groupId) {
        const url = `${this._baseUrl}/keywords/groups/${groupId}`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.delete, url, requestOptions);
    }

    /**
     * Get definition types for transcripts.
     */
    getDefinitionTypesForTranscripts () {
        const url = `${this._baseUrl}/transcripts`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get all defined custom vocabularies.
     */
    getVocabularies () {
        const url = `${this._baseUrl}/transcripts/vocabularies`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get the custom vocabulary.
     * @param vocabularyId
     */
    getVocabulary (vocabularyId) {
        const url = `${this._baseUrl}/transcripts/vocabularies/${vocabularyId}`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Create a custom vocabulary from a set of media.
     * @param vocabularyId
     * @param data
     */
    createVocabulary (vocabularyId, data) {
        const url = `${this._baseUrl}/transcripts/vocabularies/${vocabularyId}`;
        const requestOptions = _.extend({}, this._api.requestOptions, {data});

        return utils.makeRequest(this._api.client.put, url, requestOptions);
    }

    /**
     * Delete this custom vocabulary.
     * @param vocabularyId
     */
    deleteVocabulary (vocabularyId) {
        const url = `${this._baseUrl}/transcripts/vocabularies/${vocabularyId}`;
        const requestOptions = _.extend({}, this._api.requestOptions, {data});

        return utils.makeRequest(this._api.client.delete, url, requestOptions);
    }

    /**
     * Get definition types for media.
     */
    getDefinitionTypesForMedia () {
        const url = `${this._baseUrl}/media`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get searchable fields.
     */
    getSearchableFields () {
        const url = `${this._baseUrl}/media/search`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Create or update custom parameters of metadata for search.
     * @param data
     */
    createOrUpdateCustomMetadatParameters (data) {
        const url = `${this._baseUrl}/media/search`;
        const requestOptions = _.extend({}, this._api.requestOptions, {data});

        return utils.makeRequest(this._api.client.put, url, requestOptions);
    }

    /**
     * Get definition types for predictions.
     */
    getDefinitionTypesForPrediction () {
        const url = `${this._baseUrl}/predictions`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get all available predictive models.
     */
    getPredictiveModels () {
        const url = `${this._baseUrl}/predictions/models`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }

    /**
     * Get the predictive model.
     */
    getPredictiveModel (modelName) {
        const url = `${this._baseUrl}/predictions/models/${modelName}`;
        const requestOptions = _.extend({}, this._api.requestOptions);

        return utils.makeRequest(this._api.client.get, url, requestOptions);
    }
}

module.exports = Definitions;