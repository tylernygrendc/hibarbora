const functions = require('firebase-functions');
const path = require('path');
const pug = require('pug');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

exports.app = functions.https.onRequest(app);
