import mongoose from 'mongoose';
import '../models/Note';
import configs from '../../configs.json';

const Note = mongoose.model('Note');

export function setUpConnections() {
    mongoose.connect(`mongodb://${configs.db.host}:${configs.db.port}/${configs.db.name}`, { useNewUrlParser: true });
    // (`mongodb://localhost/notes`);
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });
    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}
