module.exports = (app) => {
    // TODO: Implement controller
    const controller = require('./note.controller');

    // Get all notes
    app.get('/notes', controller.findAll);

    // Create a new note
    app.post('/notes', controller.create);

    // Get a note by its ID
    app.get('/notes/:noteId', controller.find);

    // Update a note by its ID
    app.post('/notes/:noteId', controller.update);

    // Delete a note by its ID
    app.post('/notes/:noteId/delete', controller.delete)
};