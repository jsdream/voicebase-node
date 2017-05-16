function makeRequest (method, url, options) {
    return new Promise((resolve, reject) => {
        method(url, options, (data, response) => {
            if (data.errors) {
                return reject(new Error(data.errors));
            }

            resolve(data);
        });
    });
}

exports.makeRequest = makeRequest;