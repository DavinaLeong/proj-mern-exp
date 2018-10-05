module.exports = (mongoose) => {
    const NoteSchema = mongoose.Schema({
        title: String,
        content: String,
        authorId: Number
    }, {
        timestamps: true
    });

    return mongoose.model('Note', NoteSchema);
};