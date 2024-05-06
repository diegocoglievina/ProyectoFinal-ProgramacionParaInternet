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
  },
  deleteProject: function(req, res) {
    const projectId = req.params.id;
    // Deletion logic will be handled in the route handler
    return res.status(200).send({ message: "Metodo deleteProject" });
  },
  updateProject: function(req, res) {
    const projectId = req.params.id;
    const updatedProject = req.body;
    // Update logic will be handled in the route handler
    return res.status(200).send({ message: "Metodo updateProject" });
  }
};

module.exports = controller;
