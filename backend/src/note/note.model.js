const mongoose = require('mongoose');
const schemaDefinition = require('./note.schema');

const NoteSchema = mongoose.Schema(schemaDefinition.schema, {
    timestamps: true
});

module.exports = mongoose.model(schemaDefinition.collection, NoteSchema);