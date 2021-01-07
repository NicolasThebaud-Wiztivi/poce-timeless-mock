const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.listen(4444);
console.warn('[HTTP] server listening on port', 4444);

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
});

app.post('/setTokens', (request, response) => {
    console.warn('[WTCH] Received update from remote');
    const body = request.body;
    console.warn('---', body);
    // state[body.args[0]] = body.args[1];
    // resourceBlock = false;
});

