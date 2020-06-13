
const hex2rgb = require('../lib/hex2rgb');
const assert = require('assert');

describe('hex2rgb', () => {

    it('should throw an error if the value is not a hex code', () => {
        assert.throws(() => hex2rgb('blue'), /Invalid hexadecimal string/)
    });

    it('should return a correctly RGB value', () => {
        const rgb = hex2rgb('#fff');

        // use asset.deepEqual method instead of asset.equal method when determine an array if same or not
        // asset.deepEqual(actual, expected)
        assert.deepEqual(rgb, [255, 255, 255]);
    });
});