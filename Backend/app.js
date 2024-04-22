const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send("<h1>Hello World!</h1>");
});


app.get('/test', (req, res) => {
    res.status(200).send(
        {
            message : "Hello World Test"
        }
    );
  });

module.exports =app;