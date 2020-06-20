
const getPalette = require('../lib/getPalette');
// use NodeJs built-in assert package
const assert = require('assert');

describe('getPalette', () => {

    it('should throw an error if the result is not an array', () => {
        assert.throws(
            _ => {
                const configFile = process.cwd() + '/test/fixtures/config-palette-non-array.json';
                getPalette(configFile);
                },
            /Palette is not an array/
        );
    });

    it('should return an array with 3 items', () => {
        const palette = getPalette();
        // use the default assert method => asset(boolean, message), message in case failing asset
        assert(Array.isArray(palette), "didn't return an array");
        // use asset.equal method => asset(actual expected, message), message in case failing asset
        assert.equal(palette.length, 3, "didn't return 3 items");
    });
});