/* #region 0. Imports */
const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const path          = require('path');

const config        = require('./config');
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
        console.log(`Connected to ${config.mongodb.host}.`);
    })
    .catch(err => {
        console.log(`Failed to connect to ${config.mongodb.host}.`);
        console.log(`Error:\n`, err);
        process.exit();
    });
/* #endregion */


/* #region 3. Static */
app.use(express.static('./src/client/dist'));
app.use(`${config.routes.static}`, express.static(path.join(__dirname, './src/client/dist')));
/* #endregion */


/* #region 4. Routes */
require('./src/backend/note/note.routes')(app);
/* #endregion */


app.listen(config.app.port, () => {
    console.log(`Server started on port ${config.app.port}.`);
});