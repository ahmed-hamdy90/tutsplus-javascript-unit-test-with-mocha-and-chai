const fs = require('fs');

// make method take path of
const getConfig = (path) => {
    return JSON.parse(fs.readFileSync(path).toString());
}

const getPalette = (configPath) => {
    // read config path if wasn't passed, take default configuration under config.json file
    configPath = configPath || process.cwd() + '/config.json';

    const palette = getConfig(configPath).palette;
    // check given data
    if (!Array.isArray(palette)) {
        throw new Error('Palette is not an array');
    }

    return palette;
};

module.exports = getPalette;