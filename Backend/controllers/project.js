const projectSchema = require('../models/project');

const controller = {
  home: function(req, res) {
    return res.status(200).send({ message: "Soy la home" });
  },
  test: function(req, res) {
    return res.status(200).send({ message: "Soy test del controlador project" });
  },
  saveProject: function(req, res) {
    const project = req.body;
    // Validation and saving logic will be handled in the route handler
    return res.status(200).send({ message: "Metodo saveProject" });
  }
};

module.exports = controller;
