
const getData = () => {
    return ["#cc7755", "#ff5512", "#75d709"];
};

// use Dependency Injection(Method Setter) to provide palette data
const getPalette = (fetch) => {
    // define way of getting palette data
    fetch = fetch || getData;

    const palette = fetch();
    // check given data
    if (!Array.isArray(palette)) {
        throw new Error('Palette is not an array');
    }

    return palette;
};

module.exports = getPalette;