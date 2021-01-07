const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = process.argv[2];
app.listen(port);
console.warn('[HTTP] server listening on port', port);

//** DATA
let state = {};

app.get('/state', async (req, res) => {
    console.warn('[WTCH] Local request');
    res.json(state);
});

app.post('/setDisplayTokenValue', (request, response) => {
    console.warn('[WTCH] Received update from remote');
    const body = request.body;
    state[body.args[0]] = body.args[1];
    resourceBlock = false;
});
