const express   = require('express');
const path      = require('path');
const config    = require('./config');

const app = express();

app.listen(config.app.port, () => {
    console.log(`Server started on port ${config.app.port}.`);
});