
const hex2rgb = require('../lib/hex2rgb');
const assert = require('assert');

describe('hex2rgb', () => {

    // To test Asynchronous method, Mocha need to pass done callback with it method
    // For make Mocha wait
    it('should return an error if the value is not a hex code', (done) => {
        hex2rgb('blue', (err, data) => {
            assert(err);

            // finally must call Done callback
            done();
        });
    });

    it('should return a correctly RGB value', (done) => {
        hex2rgb('#fff', (err, data) => {
            assert.strictEqual(err, null);
            assert.deepEqual(data, [255, 255, 255]);

            done();
        });
    });
});