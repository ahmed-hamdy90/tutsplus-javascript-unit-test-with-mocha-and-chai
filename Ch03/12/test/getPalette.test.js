
const getPalette = require('../lib/getPalette');
// use should API under chai package
const should = require('chai').should();

describe('getPalette', () => {

    it('should throw an error if the result is not an array', () => {
        // Must use should object direct to determine is Run method has been throw error/exception or not
        should.Throw(
            _ => {
                const configFile = process.cwd() + '/test/fixtures/config-palette-non-array.json';
                getPalette(configFile);
                },
            /Palette is not an array/
        );
    });

    it('should return an array with 3 items', () => {
        const palette = getPalette();

        // by default should add prototype methods for any Array type, so check for type and length too
        palette.should.to.be.an('array').with.length(3);
    });
});