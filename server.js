const express   = require('express');
const path      = require('path');
const config    = require('./config');

const app = express();

app.use(express.static(config.app.staticUrl));
app.use(config.app.staticUrl, express.static(path.join(__dirname, config.app.staticUrl)));

app.listen(config.app.port, () => {
    console.log(`Server started on port ${config.app.port}.`);
});