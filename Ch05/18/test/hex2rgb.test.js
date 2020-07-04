
const hex2rgb = require('../lib/hex2rgb');
// use expect API under chai package, it same methods related to should API under chai package
const expect = require('chai').expect;
// use sinon package
const sinon =  require('sinon');

describe.only('hex2rgb', () => {

    describe('convert method', () => {
        // To test Asynchronous method, Mocha need to pass done callback with it method For make Mocha wait

        it('should call parse once', (done) => {
            // use sinon.spy method on parse method
            sinon.spy(hex2rgb, 'parse');

            hex2rgb.convert('#ffffff', (err, data) => {
                // check if hex2rgb.parse has been call one time plus given argument be array with length 6
                expect(hex2rgb.parse.calledOnce).to.be.true;
                expect(hex2rgb.parse.getCall(0).args[0]).to.have.length(6);

                // before complete test case must undo sinon.spy using restore
                hex2rgb.parse.restore();

                // finally must call Done callback
                done();
            });
        });

        it('should return an error if the value is not a hex code', (done) => {
            hex2rgb.convert('blue', (err, data) => {
                // use expect methods to determine error object is not null/undefined
                expect(err).to.exist;

                // finally must call Done callback
                done();
            });
        });

        it('should return a correctly RGB value', (done) => {
            hex2rgb.convert('#fff', (err, data) => {
                // use expect methods to determine error object is null/undefined (opposite for above usage)
                expect(err).to.not.exist;
                // use expect methods to determine array are deep equal
                expect(data).to.deep.equal([255, 255, 255]);

                done();
            });
        });
    });

});