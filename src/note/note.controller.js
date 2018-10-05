const model = require('./note.model');

module.exports = {
    findAll: (req, res) => {
        model.find()
        .then(notes => {
            res.send(notes)
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "An error occurred while retrieving all notes."
            });
        });
    },

    create: (req, res) => {
        //TODO: Backend validation
        if (! req.body.content) {
            return res.status(400).send({
                message: "The content field is required."
            });
        }

        const note = new model({
            title: req.body.title || "Untitled Note",
            content: req.body.content,
            authorId: req.body.authorId || null
        });
    },

    find: (req, res) => {
        //TODO:  Find a note by its ID
    },

    update: (req, res) => {
        //TODO: Update a note by its ID
        //TODO: Backend validation
    },

    delete: (req, res) => {
        //TODO: Delete a note by its ID
    }
};