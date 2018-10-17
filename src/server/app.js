import express from 'express';

const app = express();
const port = 8080;
app.get('/', ( req, res ) => {
    res.send('Hello, world!');
});

const server = app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
