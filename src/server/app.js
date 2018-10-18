import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils';
import { serverPort } from '../configs.json';

db.setUpConnections();
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to notes-app!');
});

app.get('/notes', (req, res) => {
    db.listNotes().then(data => {
        res.send(data);
    });
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

// run server:
app.listen(serverPort, () => {
    // console.log(`Server is running on port ${serverPort}`);
});
