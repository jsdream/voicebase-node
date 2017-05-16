module.exports = {
    /**
     * Base URL to VoiceBase API.
     */
    baseUrl: 'https://apis.voicebase.com',

    /**
     * Set the connection timeout limit (in milliseconds).
     */
    connectionTimeout: 30000,

    /**
     * Set the response timeout limit (in milliseconds).
     */
    responseTimeout: 80000,

    /**
     * VoiceBase REST API version - will be appended after baseUrl in the front of the endpoints.
     */
    apiVersion: 'v2-beta',

    /**
     * OAuth Bearer token.
     */
    bearerToken: ''
};