const config = require('./../../../config');

module.exports = (app) => {
    // TODO: Implement controller
    const controller = require('./note.controller');

    // Get all notes
    app.get(`/${config.routes.api}/notes`, controller.findAll);

    // Create a new note
    app.post(`/${config.routes.api}/notes`, controller.create);

    // Get a note by its ID
    app.get(`/${config.routes.api}/notes/:noteId`, controller.find);

    // Update a note by its ID
    app.post(`/${config.routes.api}/notes/:noteId`, controller.update);

    // Delete a note by its ID
    app.post(`/${config.routes.api}/notes/:noteId/delete`, controller.delete)
};