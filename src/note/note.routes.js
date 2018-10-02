module.exports = (app) => {
    // TODO: Implement controller
    // const NoteController = require('./note.contoller.js');

    // Get all notes
    app.get('/notes', NoteController.findAll);

    // Create a new note
    app.post('/notes', NoteController.create);

    // Get a note by it's ID
    app.get('/notes/:noteId', NoteController.find);

    // Update a note by it's ID
    app.post('/notes/:noteId', NoteController.update);

    // Delete a note by it's ID
    app.post('/notes/:noteId/delete', NoteController.delete)
};