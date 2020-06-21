
// convert hex2rgb method to become Asynchronous method using error-first callback
// use setTimeout to simulate Asynchronous action
const hex2rgb = (hex, callback) => {
    setTimeout(_ => {
        // check if given hex color string begin # to remove it
        if (/^#/.test(hex)) {
            hex = hex.slice(1);
        }
        // make sure given hex color was correct format
        if (hex.length !== 3 && hex.length !== 6) {
            callback(new Error('Invalid hexadecimal string'));
            return;
        }
        // split hex color string to array of numbers
        let nums = hex.split('');
        // duplicate hex color nums in case given hex color with 3 numbers
        if (nums.length === 3) {
            nums = [nums[0], nums[0], nums[1], nums[1], nums[2], nums[2]];
        }
        // convert hexadecimal to RGB color operation
        const r = parseInt([nums[0], nums[1]].join(''), 16);
        const g = parseInt([nums[4], nums[5]].join(''), 16);
        const b = parseInt([nums[2], nums[3]].join(''), 16);

        callback(null, [r, g, b]);
    }, 50);
};

module.exports = hex2rgb;