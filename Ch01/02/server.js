const express = require('express');
const app     = express();
const port = 9000;

// set template engine will used in express app
app.set('view engine', 'pug');

// set express app Routes
app.get('/', (req, res) => {
    res.render('index', { palette : ["#cc7790", "#ff5512", "#75d709"] });
});

// set port will server listen
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));