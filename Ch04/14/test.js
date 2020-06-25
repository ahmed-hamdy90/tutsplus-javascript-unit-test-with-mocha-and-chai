const express = require('express');
const app     = express();

const port = 9000;

// set mocha created browser folder as static folder
app.use(express.static(process.cwd() + '/browser'));

// set express app Routes
app.get('/', (req, res) => {
    // render index html file which generated by mocha to run unit test
    res.sendFile(process.cwd() + '/browser/index.html');
});

// set port will server listen
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));