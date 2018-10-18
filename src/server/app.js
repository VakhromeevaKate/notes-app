import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils';

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

// run server:
app.listen(port, () => {});
