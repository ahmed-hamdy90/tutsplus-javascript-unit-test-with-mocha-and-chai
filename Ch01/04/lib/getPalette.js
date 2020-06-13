
const getData = () => {
    return ["#cc7755", "#ff5512", "#75d709"];
};

const getPalette = () => {
    const palette = getData();
    // check given data
    if (!Array.isArray(palette)) {
        throw new Error('Palette is not an array');
    }

    return palette;
};

module.exports = getPalette;