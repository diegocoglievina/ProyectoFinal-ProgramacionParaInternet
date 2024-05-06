// Nuevo
var Project = require('../models/project');

var controller = {
    home: function(req, res) {
        return res.status(200).send({ message: "Soy la home" });
    },
    test: function(req, res) {
        return res.status(200).send({ message: "Soy test del controlador project" });
    },
    // Nuevo
    saveProject: function(req, res) {
        var project = new Project();
        return res.status(200).send({ message: "Metodo saveProject" });
    }
};

module.exports = controller;
