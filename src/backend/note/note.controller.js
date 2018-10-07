const model = require('./note.model');

module.exports = {
    findAll: (req, res) => {
        model.find()
        .then(notes => {
            res.send(notes)
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "An error occurred while retrieving all Notes."
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

        note.save()
            .then(result => {
                res.send(result);
            })
            .catch(err => {
                return res.status(500).send({
                    message: "An error occurred while creating a Note."
                });
            });
    },

    find: (req, res) => {
        //TODO:  Find a note by its ID
        model.findById(req.params.noteId)
            .then(note => {
                if (! note) {
                    return res.status(404).send({
                        message: `Note not found.`
                    });
                }

                res.send(note);
            })
            .catch(err => {
                return res.status(500).send({
                    message: "An error occurred while retrieving a Note."
                });
            });
    },

    update: (req, res) => {
        //TODO: Backend validation
        if (! req.body.content) {
            return res.status(404).send({
                message: "The content field is required."
            });
        }

        model.findByIdAndUpdate(req.params.noteId, {
            title: req.body.title || "Untitled Note",
            content: req.body.content,
            authorId: req.body.authorId || null
        }, { new: true })
            .then(note => {
                if (! note) {
                    return res.status(404).send({
                        message: "Note not found."
                    });
                }
                res.send(note);
            })
            .catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Note not found"
                    });
                }

                res.status(500).send({
                    message: err.message || "An error occurred while updating a Note."
                });
            });
    },

    delete: (req, res) => {
        model.findByIdAndDelete(req.params.noteId)
            .then(note => {
                if (! note) {
                    return res.status(404).send({
                        message: 'Note not found'
                    });
                }
                res.send({ message: "Note deleted." });
            })
            .catch(err => {
                return res.status(404).send({
                    message: err.message || "An error occurred while deleting a Note."
                });
            });
    }
};