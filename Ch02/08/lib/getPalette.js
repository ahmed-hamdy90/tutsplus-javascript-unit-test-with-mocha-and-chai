const fs = require('fs');

const getConfig = () => {
    // Read hole configuration details under config.json file
    const filePath = process.cwd() + '/config.json';

    return JSON.parse(fs.readFileSync(filePath).toString());
}

const getPalette = () => {

    const palette = getConfig().palette;
    // check given data
    if (!Array.isArray(palette)) {
        throw new Error('Palette is not an array');
    }

    return palette;
};

module.exports = getPalette;