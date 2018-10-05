/* #region 0. Imports */
const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const path          = require('path');

const config        = require('./lib/config');
/* #endregion */

const app = express();


/* #region 1. App setup */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/* #endregion */


/* #region 2. Database */
mongoose.Promise = global.Promise;

mongoose.connect(config.mongodb.host, { useNewUrlParser: true })
    .then(() => {
        console.log(`Connected to ${config.mongodb.url}.`);
    })
    .catch(err => {
        console.log(`Failed to connect to ${config.mongodb.url}.`);
        console.log(`Error:\n`, err);
        process.exit();
    });
/* #endregion */


/* #region 3. Routes */

/* #endregion */


/* #region 4. Static */
app.use(express.static(config.app.staticUrl));
app.use(config.app.staticUrl, express.static(path.join(__dirname, config.app.staticUrl)));
/* #endregion */

app.listen(config.app.port, () => {
    console.log(`Server started on port ${config.app.port}.`);
});