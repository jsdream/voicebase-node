describe('Media Resource', () => {
    it('Should retrieve from the media collection', () => {
        return api.media.get().then((data) => {
            expect(data.media).to.be.an('array');
        });
    });

    it('Should upload new media to the service as an attachment or from a url', () => {
        return api.media.upload().then((data) => {
            console.log('data', data);
        });
    });
});