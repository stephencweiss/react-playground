const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname + '/../dist')))

app.listen(PORT, () => { console.log( `listening on ${PORT}`)});