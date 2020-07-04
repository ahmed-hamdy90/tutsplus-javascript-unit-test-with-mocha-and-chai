
const hex2rgb = require('../lib/hex2rgb');
// use expect API under chai package, it same methods related to should API under chai package
const expect = require('chai').expect;
// use sinon package
const sinon =  require('sinon');

describe.only('hex2rgb', () => {

    describe('convert method', () => {
        // To test Asynchronous method, Mocha need to pass done callback with it method For make Mocha wait

        it('should call parse once', (done) => {
            // use sinon.spy method on hex2rgb.parse method
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

        it('should always return the result of parse', (done) => {
            const expectedReturnedResult = [0, 0, 200];
            // use sinon.stub method in hex2rgb.parse method
            const parseStub = sinon.stub(hex2rgb, 'parse');
            parseStub.returns(expectedReturnedResult);

            hex2rgb.convert('#abc', (err, data) => {
                // check return result from hex2rgb.convert the same setting for hex2rgb.parse method using stub
                expect(data).to.deep.equal(expectedReturnedResult);

                // before complete test case must undo sinon.stub using restore
                hex2rgb.parse.restore();

                // finally must call Done callback
                done();
            });
        });

        it('should always pass a 6 item array to parse', (done) => {
            // use sinon.mock method on hex2rgb object
            const hex2rgbMock = sinon.mock(hex2rgb);
            // check hex2rgb.parse method to be called twice and check it passed method
            hex2rgbMock.expects('parse').twice().withExactArgs("000000".split(''));

            // call hex2rgb twice nested
            hex2rgb.convert('#000000', (err, data) => {

               hex2rgb.convert('#000', (err, data) => {
                   // check if mocking hex2rgb.parse correct using verify method
                   hex2rgbMock.verify();

                   // finally must call Done callback
                   done();
               })
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