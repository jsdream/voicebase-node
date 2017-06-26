const fs = require('fs');

describe('Media Resource', () => {
    it('Should retrieve from the media collection', () => {
        return api.media.get().then((data) => {
            expect(data.media).to.be.an('array');
        });
    });

    it('Should upload new media to the service as an attachment', () => {
        return api.media.upload(fs.createReadStream(__dirname + '/../fixtures/test-recording.mp3'), {}, {}, {}).then((data) => {
            expect(data).to.have.property('mediaId');
        });
    });

    it('Should upload new media to the service from a url', () => {
        const mediaUrl = 'https://s3.amazonaws.com/voicebase-developer-test-content-dev/mpthreetest.mp3';

        return api.media.upload(mediaUrl, {}, {}, {}).then((data) => {
            expect(data).to.have.property('mediaId');
        });
    });
});