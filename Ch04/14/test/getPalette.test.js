
const getPalette = require('../lib/getPalette');
// use expect API under chai package, it same methods related to should API under chai package
const expect = require('chai').expect;

describe('getPalette', () => {

    it('should throw an error if the result is not an array', () => {
        // use expect methods which check has been throw error/exception or not
        expect(() => {
            const configFile = process.cwd() + '/test/fixtures/config-palette-non-array.json';
            getPalette(configFile);
        }).to.throw(/Palette is not an array/);
    });

    it('should return an array with 3 items', () => {
        const palette = getPalette();

        // use expect methods for check id Array type, Plus length too
        expect(palette).to.be.an('array').with.length(3);
    });
});