
const hex2rgb = require('../lib/hex2rgb');
// use should API under chai package
const should = require('chai').should();

describe('hex2rgb', () => {

    // To test Asynchronous method, Mocha need to pass done callback with it method
    // For make Mocha wait
    it('should return an error if the value is not a hex code', (done) => {
        hex2rgb('blue', (err, data) => {
            // by default should add prototype methods for any Object type,
            // so use exist method which determine if object exist and not null/undefined
            err.should.exist;

            // finally must call Done callback
            done();
        });
    });

    it('should return a correctly RGB value', (done) => {
        hex2rgb('#fff', (err, data) => {
            // Must use should object direct, not use added prototype methods(like above) as err is null
            should.not.exist(err);

            // by default should add prototype methods for any Array type, so check for deep equal test
            data.should.deep.equal([255, 255, 255]);

            done();
        });
    });
});