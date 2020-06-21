
const hex2rgb = require('../lib/hex2rgb');
// use expect API under chai package, it same methods related to should API under chai package
const expect = require('chai').expect;

describe('hex2rgb', () => {

    // To test Asynchronous method, Mocha need to pass done callback with it method
    // For make Mocha wait
    it('should return an error if the value is not a hex code', (done) => {
        hex2rgb('blue', (err, data) => {
            // use expect methods to determine error object is not null/undefined
            expect(err).to.exist;

            // finally must call Done callback
            done();
        });
    });

    it('should return a correctly RGB value', (done) => {
        hex2rgb('#fff', (err, data) => {
            // use expect methods to determine error object is null/undefined (opposite for above usage)
            expect(err).to.not.exist;
            // use expect methods to determine array are deep equal
            expect(data).to.deep.equal([255, 255, 255]);

            done();
        });
    });
});