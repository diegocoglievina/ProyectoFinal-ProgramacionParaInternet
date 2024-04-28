const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var project_routes = require('./routes/project');

// rutas
app.use('/api', project_routes);

module.exports =app;