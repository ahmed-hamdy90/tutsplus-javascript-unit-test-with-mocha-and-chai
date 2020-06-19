
const getPalette = require('../lib/getPalette');
// use NodeJs built-in assert package
const assert = require('assert');
const fs = require('fs');

const configFile = process.cwd() + '/config.json';
// create method to override configuration under config.json file, pass new config and error first callback
const writeConfig = (config, callback) => {
    fs.writeFile(configFile, JSON.stringify(config), callback);
};

describe('getPalette', () => {

    let config = {}; // member to save the basic configuration under config.json file

    // setup Mocha Hooks, use Before hook which run once before first test
    // To deal with Asynchronous method into Hook implement,
    // pass/use Done callback as same as test cases which deal with Asynchronous methods
    before((done) => {
        fs.readFile(configFile, (err, contents) => {
           if (err) {
               throw new Error(err.message);
           }
           config = JSON.parse(contents.toString());

           done();
        });
    });

    // setup Mocha Hooks, use AfterEach hook which run after every test case execute
    afterEach((done) => {
        // re-back configuration under config.json file with saved config object
        writeConfig(config, (err, data) => done());
    })

    it('should throw an error if the result is not an array', (done) => {
        writeConfig({palette: 'string'}, (err, data) => {
            assert.throws(getPalette, /Palette is not an array/);

            done();
        });
    });

    it('should return an array with 3 items', () => {
        const palette = getPalette();
        // use the default assert method => asset(boolean, message), message in case failing asset
        assert(Array.isArray(palette), "didn't return an array");
        // use asset.equal method => asset(actual expected, message), message in case failing asset
        assert.equal(palette.length, 3, "didn't return 3 items");
    });
});