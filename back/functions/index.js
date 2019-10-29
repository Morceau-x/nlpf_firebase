const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();

app.use(cors);


app.get('/', (req, res) => {
    res.send('Hello World');
});

exports.app = functions.https.onRequest(app);